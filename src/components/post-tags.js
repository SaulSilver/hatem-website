import React from 'react';

const PostTags = ({ tags }) => (
  <div className="post-tags inline">
    {tags.map(tag => (
      <small>#{tag}</small>
    ))}
  </div>
);

export default PostTags;
