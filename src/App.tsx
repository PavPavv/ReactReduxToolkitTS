import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from './store/storeHooks';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import Notifify from './components/UI/Notifiy';
import { sendCartData, fetchCartData } from './store/cart/cart-actions';

import './App.css';
import { cartActions } from './store/cart/cart-slice';

let isIntial = true;

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cartIsVisible = useAppSelector(state => state.ui.cartIsVisible);
  const cart = useAppSelector(state => state.cart);
  const notification = useAppSelector(state => state.ui.notification);

  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
    
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      {notification && 
        <Notifify 
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        <>
          {cartIsVisible && <Cart />}
          <Products />
        </>
      </Layout>
    </>
  );
}

export default App;
