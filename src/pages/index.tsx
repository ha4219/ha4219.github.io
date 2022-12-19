import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import tw from 'twin.macro';

const Wrapper = tw.h2`font-bold text-3xl`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <div css={tw`font-bold`}>Hello world!</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
