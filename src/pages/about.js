import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const aboutText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <div className="about-content">
      <h1>
        <Fade bottom cascade>
          About
        </Fade>
      </h1>
      <Fade bottom>
        <p>{aboutText}</p>
      </Fade>
    </div>
    {/* {data.ShowAboutImage ? (
      <img src={data.aboutImage} alt="about iamge" />
    ) : null} */}
  </Layout>
);

export default AboutPage;
