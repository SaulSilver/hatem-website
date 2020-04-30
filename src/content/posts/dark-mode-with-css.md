---
path: '/blog/dark-mode-with-css'
title: Dark mode with CSS
published: true
date: '2020-03-02'
description: Since https://remotework.jp/ went live a while ago, I wanted to add the dark mode to it
category: software
tags: ['dark', 'css', 'opensource']
---

My eyes hurt a lot when I stare at a bright screen with light mode so I use [Dark Reader](https://darkreader.org/) but prefer the website native support for dark mode.

Since https://remotework.jp/ went live a couple of weeks ago, I wanted to add the dark mode to it. Luckily, CSS supports the media query `prefers-color-scheme` which checks the user's default mode for light/dark and add CSS specific to each case.

So I went on and added this simple piece of CSS and no Javascript needed for this change!

```css
body {
  @media (prefers-color-scheme: dark) {
    color: #515151;
    background-color: #000;
  }
  @media (prefers-color-scheme: light) {
    color: #515151;
    background-color: #fff;
  }
}
```

Et voilà! Dark mode easily supported...
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/h703ujf9cp6txbhtujp4.png)

And light mode still there.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/bziq3ls7jsyfllw4emm4.png)

For further reading and better styling structure of your whole website/app, I suggest reading this [post](https://nandovieira.com/supporting-dark-mode-in-web-content).
