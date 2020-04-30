---
path: '/blog/time-series-database-drawbacks'
title: Time Series database drawbacks
published: true
date: '2019-08-27'
description: Issues I have encountered with time series databases
category: software
tags: ['database', 'design', 'backend']
---

## Use case

Lately, I needed to create an analysis page on the app to count how many shoes a shop has. The database set up is MongoDB so I looked for a good database design suitable for analysis.

My analysis is

1. Yearly, monthly, daily count of shoes
2. A shoe has the maker name and color

After searching, I found Time Series can be done on MongoDB from this [article](https://www.mongodb.com/blog/post/time-series-data-and-mongodb-part-1-introduction). Still, needed a bit more solid production-level tutorial, and luckily I found it [here](https://dev.to/riccardo_cardin/implementing-time-series-in-mongodb) on Dev Community by the awesome Riccardo Cardin!

## Solution

Assuming these datasets we have for the shoes counters, I started implementing it and it was ready.

```
Dataset

Makers: ['Nike', 'Adidas', 'Onitsuka Tiger']
Colors: ['White', 'Black', 'Red']
```

The way I set up the Analysis DB is to have the collection `Shoes` containing a document/year. When the document first created, all counters are set to 0 then incremented daily.

```javascript
DB Shoes Collection document

{
  created_at: ISODate("2019-01-01T00:00:10.000Z"),
  year: 2019,
  nike: 15000,
  adidas: 10000,
  tiger: 8000,
  black: 25000,
  white: 1000,
  red: 8000,
  // months is an array of 12 elements
  months: [
    {
      created_at: ISODate("2019-01-01T00:00:10.000Z"),
      nike: 200,
      adidas: 1000,
      tiger: 80,
      black: 200,
      white: 1000,
      red: 80,
      // days is an array of days/month
      days: [
        {
          created_at: ISODate("2019-01-01T00:00:10.000Z"),
          nike: 20,
          adidas: 100,
          tiger: 8,
          black: 120,
          white: 8,
          red: 0,
        }
         // rest of days
      ]
    }
    // rest of months
  ]
};
```

### Advantages

- This structure is powerful because the document size doesn't change after creation so IO processes are not as expensive, this document size would be around 35 Kbs
- Fetching the document and getting what you need (e.g. Nike shoes number on 2/8/2019) can be tricky at first sight, but thanks to Functional programming, create 1 function and reuse it
- The structure is neat and very well-organized.

### Drawbacks

Let's say we want to use some filtering on the Graph to find Black Adidas shoes count on 15/4/2019. The above DB structure fails to give us any information about overlapping joined counters, they're just atomic mere counters.

The only way around it I could think of is creating new counters with every possible joint. This is absolutely a terrible idea, hence, decided to put down the Time Series DB for now and find another design for this use case.
