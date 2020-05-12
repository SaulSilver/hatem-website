import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const LINKS = [
  { name: 'github', link: 'https://github.com/SaulSilver' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/hatemhoussein/' },
  { name: 'twitter', link: 'https://twitter.com/hatem_hou' },
  { name: 'dev', link: 'https://dev.to/saulsilver' },
  { name: 'gitlab', link: 'https://gitlab.com/hForHatem' }
];
// FIXME: show icons in darkmode
const Sns = () => (
  <section className="sns">
    {LINKS.map(({ name, link }, index) => (
      <OutboundLink className={name} href={link} target="_new" key={index}>
        <div></div>
      </OutboundLink>
    ))}
  </section>
);

export default Sns;
