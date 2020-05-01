import React from 'react';

const LINKS = [
  { name: 'github', link: 'https://github.com/SaulSilver' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/hatemhoussein/' },
  { name: 'twitter', link: 'https://twitter.com/hatem_hou' },
  { name: 'dev', link: 'https://dev.to/saulsilver' },
  { name: 'gitlab', link: 'https://gitlab.com/hForHatem' }
];

const Sns = () => (
  <section className="sns">
    {LINKS.map(({ name, link }, index) => (
      <a
        className={name}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        <div></div>
      </a>
    ))}
  </section>
);

export default Sns;
