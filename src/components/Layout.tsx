import React from 'react';
import { GlobalStyles } from 'twin.macro';

interface IProps {}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
