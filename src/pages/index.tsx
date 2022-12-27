import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <div className="font-bold text-3xl">Hello world!</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
