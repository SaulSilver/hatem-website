---
path: '/blog/react-hooks-and-meteor-reactive-var'
title: React hooks vs Meteor reactive var
published: true
date: '2019-07-25'
description: A show case of react hooks compared to meteor reactive vars
category: software
tags: ['react', 'hooks', 'meteor', 'frontend']
---

I have been working heavily with MeteorJS, so Reactive-var has become almost a second-nature to me and I assume you have a good understanding of how templating and Reactive vars run in Meteor. Meanwhile, I have been working with React more often lately. Now, it's been roughly 5 months since React `Hooks` has been out at the time of writing this. I was reading the Hooks docs then watched a [video](https://www.youtube.com/watch?v=G-aO5hzo1aw) by [MPJ](https://twitter.com/mpjme) with [Dan](https://twitter.com/dan_abramov) who works at React. I recommend the video (it's 30 min. long if you watch in 2x speed 😉)

So let's jump to code to see how different/similar React `Hooks` work compared to Meteor's `Reactive-var`.

Meteor version of a simple Reactive var create/get/set.

```javascript
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './my_cool_text_field.html';

const template = Template.my_cool_text_field;

template.onCreated(() => {
  const instance = Template.instance();
  // Suppose we have a text input field called "title"
  instance.titleVar = new ReactiveVar('');
});

template.helpers({
  getTitle() {
    return Template.instance().titleVar.get();
  }
});

template.events({
  'click .change-title': () => Template.instance().titleVar.set(newTitle)
});
```

React version of the same Meteor processes

```javascript
import React, { useState } from 'react';

export default MyCoolTextField = () => {
  // `useState()` returns the variable and a setter function for the variable
  // We set the default value of `title` as a parameter to `useState()`
  const [title, setTitle] = useState('');

  const handleChange = event => setTitle(event.target.value);

  return (
    <div>
      <input
        className="change-title"
        name="title"
        type="text"
        value={title}
        onChange={handleChange}
      />
    </div>
  );
};
```

Also note the I haven't put the template HTML for the Meteor snippet.
