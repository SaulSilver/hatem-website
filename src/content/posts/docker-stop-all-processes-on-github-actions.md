---
path: '/blog/docker-stop-all-processes-on-github-actions'
title: Docker stop all processes on Github Actions
published: true
date: '2019-07-05'
description: How to show all Docker running containers, stop and remove them on Github Actions

category: software
tags: ['CI/CD', 'docker']
---

### _Side note_

_Advancing in CI/CD can be challenging due to the lack of intermediate tutorials/blogs regarding this part of development. It's easy to find simple "how to set up your workflow with minimum jobs" articles that don't really help in production-level projects. I wonder why._

### Problem

I have Docker in one of the projects I am working on and wanted to integrate CI/CD. So I went with Github Actions v2 and started to check how to handle Docker and Docker-compose on Github Actions. There aren't many differences between Github Actions and other deployment workflow providers (e.g. CircleCI, Travis), but I would say the major difference is [Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/about-actions).

In the Continuous Deployment step, I need to access the server and stop all running Docker processes. Of course, I cannot stop the docker process by container ID because it's dynamic and changes whenever the process is run.

### Example

Consider we have these Docker containers running

```sh
$ docker ps -a

CONTAINER ID        IMAGE                        COMMAND                CREATED              STATUS              PORTS               NAMES
4c01db0b339c        ubuntu:12.04                 bash                   17 seconds ago       Up 16 seconds       3300-3310/tcp       webapp
d7886598dbe2        crosbymichael/redis:latest   /redis-server --dir    33 minutes ago       Up 33 minutes       6379/tcp            redis,webapp/db

```

### Workaround

A static identifier is needed to stop the process, so I could call each image by its name and stop it.

```sh
docker stop ubuntu:12.04 crosbymichael/redis:latest
docker rm ubuntu:12.04 crosbymichael/redis:latest
```

That's fairly okay if you have a few containers running and you are sure other docker containers don't exist. But it's an assumption I'm not willing to take and also, it's buggy if I add a new container later on and forget to add it in the workflow script.

### Common solution

Some of you might be screaming already with this holy grail command.

```sh
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

This basically stops/removes all existing container processes no matter what their identifiers are. Nice! Now push that to our Github `remote` and wait for Github Actions Runner to finish the workflow script, but then the Runner shows the red cross :x: The build has failed with an error about `docker stop requires a parameter`.

Github Actions uses the `$` to call variables (e.g. [`GITHUB_REPOSITORY`](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables)), so it looks for variable called `docker ps...` but it's undefined since I didn't set it as an environment variable in the workflow. We could escape the Action's default `$` with another `$` so the command becomes

```sh
docker stop $$(docker ps -a -q)
```

However, this also didn't work, I looked it up a bit and didn't find a good explanation for it but was spending too much time on this. So I moved on, after all, stopping docker processes isn't the main task for the whole workflow.

### Working solution

After prioritizing my tasks for the project, I decided to find a different solution and quickly overcome this problem. Only then, I stumbled upon this piece of bash script which I haven't seen before.

```sh
ids=$(docker ps -a -q)
for id in $ids
do
 echo "$id"
 docker stop $id && docker rm $id
done
```

First line assigns the outcome of `docker ps ...` to a variable called `ids`. Then we make a `for` loop to iterate through all the ids and for each id, we stop and remove the process with that id.

Github Actions Runner passed this without any errors so I was happy to have learned a new trick and move on with my other tasks to finish up the workflow.
