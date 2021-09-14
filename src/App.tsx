import React from 'react';

import { useAppSelector } from './store/storeHooks';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

import './App.css';

const App = (): JSX.Element => {
  const cartIsVisible = useAppSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      <>
        {cartIsVisible && <Cart />}
        <Products />
      </>
    </Layout>
  );
}

export default App;
