import { Link } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';

export default projects => (
  <div className="category-projects">
    {projects.map((project, i) => (
      <div className="project" key={i}>
        {project.title}
      </div>
    ))}
  </div>
);
