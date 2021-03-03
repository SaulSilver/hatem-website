import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const LINKS = [
  { name: 'github', link: 'https://github.com/SaulSilver' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/hatemhoussein/' },
  { name: 'dev', link: 'https://dev.to/saulsilver' },
  { name: 'gitlab', link: 'https://gitlab.com/hForHatem' }
];
const Sns = () => (
  <section className="sns">
    {LINKS.map(({ name, link }, index) => (
      <OutboundLink
        className={name}
        alt={name}
        name={name}
        href={link}
        target="_new"
        key={index}
      >
        <div></div>
      </OutboundLink>
    ))}
  </section>
);

export default Sns;
