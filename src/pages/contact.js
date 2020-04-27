import React from 'react';
import { navigate } from 'gatsby-link';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const ContactPage = () => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // TODO: read about Netlify form submissions and notifications
  // https://docs.netlify.com/forms/submissions/#form-submissions-ui
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <Fade left cascade>
        <h1 className="page-header-title">Say hello</h1>
      </Fade>
      <p className="contact-me-intro">
        Feel free to contact me about anything and I will get back to you as
        soon as I can.
      </p>
      <form
        name="contact"
        method="POST"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="How can I help you? Want to grab a drink together?"
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Send message
        </button>
        <div className="contact-by-email">
          <span>or</span>
          <a href="mailto:hatem.houssein@gmail" rel="noreferer">
            hatem.houssein@gmail
          </a>
        </div>
      </form>
    </Layout>
  );
};

export default ContactPage;
