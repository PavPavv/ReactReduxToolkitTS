import { useAppSelector } from '../../store/storeHooks';
import { Item } from '../../store/cart/cart-slice';
import Card from '../UI/Card';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (): JSX.Element => {
  const cartItems = useAppSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item: Item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.name}
              quantity={item.quantity}
              total={item.totalPrice}
              price={item.price}
              description={item.name}
            />
          ))}
          
        </ul>
      </>
    </Card>
  );
};

export default Cart;
