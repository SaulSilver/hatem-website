---
path: '/blog/saving-dates-on-database-saves-your-day'
title: Saving dates on database saves your day
published: true
date: '2019-05-15'
description: Decision making for database minor design
category: software
tags: ['database', 'design']
---

A while ago, I had to add a discount system for a web app. The discount period is a week and the start can differ from a user to another. Later on, we want to filter those users who are on a discount and those who are not.

The task seemed simple and quickly decided on using the following approach.

1. Create a discount `date` field in the user document on the DB (MongoDb)
2. After the week has passed, replace the discount date field to a `boolean` set to `false`.

The reason behind replacing a `date` field to `boolean` is to save up myself some lines of code and avoid dates comparison which can be tricky to compare sometimes, especially with multiple timezones. So I started implementing, finished, tested then deployed to production.

A few days later, I found out getting more data from the discount system can be useful. Imagine all the information about how well/bad the discount affects the users number over time, just by knowing when the users' discounts were created and ended. The problem is I only have the start date until the discount is finished, then neither start nor end dates are available anymore. How sad..

So I changed quickly to a better design, scratch off number 2 and add the
start and end dates. Let the code be longer, but now I got
more reliable and specific data.

## Lesson learnt

1. Having dates about events in the database gives you more insight for your data
2. Troubleshooting on production level can be tricky without enough information
3. Give enough time for designing your Database fields and how data flows with some use cases.
