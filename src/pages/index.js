import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList';

import Image from '../../content/static/aditya.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <div className="center-block">
        <img alt="Author's Avatar" src={Image} />
        <h2 id="site-title">Random Thoughts Of A Programmer</h2>
      </div>
    </div>
    <PostList />
  </Layout>
);

export default IndexPage;
