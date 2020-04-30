---
path: '/blog/graphql-are-we-there-yet'
title: GraphQL, are we there yet?
published: true
date: '2019-05-27'
description: When to migrate from REST to GraphQL
category: software
tags: ['rest', 'graphql', 'api', 'decision']
---

Shopify is an E-commerce platform with cool APIs (much better than others). Their GraphQL has passed the Beta version and is now stable, and they are still maintaining REST.

Our app works with Shopify REST API and lately, we have been thinking about migrating to GraphQL. Why? GraphQL is newer, cooler and would _supposedly_ solve performance issues due to REST API restrictions.

I started digging into their docs, which is still work in progress but good enough.

### Summary of GraphQL

Per its namesake, you can imagine a graph with _nodes_, _edges_ and _connections_. I will not get into this more but you can check this good [article](https://blog.apollographql.com/explaining-graphql-connections-c48b7c3d6976) to know more about GraphQL.

1. GraphQL doesn't have call limit per-say but _cost_ rate exists. The cost normally depends on how many fields and connections cost, which is really well-explained in the article mentioned above. The cost rate is to avoid the server from crashing due to overload or attacks.

2. Pagination exists also for GraphQL called [_cursor pagination_](https://blog.apollographql.com/understanding-pagination-rest-graphql-and-relay-b10f835549e7), a little different from what I have experienced with REST's. ~~Although GraphQL's pagination can be implemented in REST APIs, I haven't seen one yet. Please let me know if you know any!~~ (Slack & Django do, thanks @rhymes!)
   -------- Update 8/11/2019 --------
   Shopify just released they're moving from page-based pagination to cursor-based pagination.
   ------------

### Decision-making step

From my findings and based on some others' reviews, I was skeptical about migrating from REST to GraphQL. I read some reviews saying GraphQL is powerful for some processes but is still weak for other processes.

Mixing both APIs on our app would get the best of both APIs, but adds more complexity to the codebase. I would rather avoid complexity and be limited by either APIs.

I felt Shopify's GraphQL was built upon their REST API design restricting GraphQL's advantages. My skepticism was growing and eventually, I stumbled upon this [article](https://medium.com/@francoisz/test-is-graphql-right-for-you-21a7a4858769). Based on a simple Q&A, you can see if it's worth migrating from REST to GraphQL. Of course, the decision, in the end, is up to you but it was quite affirmative to me that I was skeptical for a good reason.

### Conclusion

Eventually, we decided to hold on the migration for a while and see what Shopify GraphQL might introduce to us in the future.
As a side-note, I believe in order to make a good GraphQL API, the API design should be thought of as a graph (with edges & nodes) to make it more efficient.
