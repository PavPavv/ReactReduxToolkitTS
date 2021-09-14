import { Fragment } from 'react';
import MainHeader from './MainHeader';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
