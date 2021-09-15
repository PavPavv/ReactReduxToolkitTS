import { useAppDispatch } from '../../store/storeHooks';
import { cartActions } from '../../store/cart/cart-slice';
import { Product } from '../../store/cart/cart-slice';

import classes from './CartItem.module.css';

type CartItemProps = {
  id: number;
  title: string;
  quantity: number;
  total: number;
  price: number;
  description: string;
};

const CartItem = ({ id, title, quantity, total, price, description }:CartItemProps ): JSX.Element => {
  const dispatch = useAppDispatch();

  const addItemHandler = (): void => {
    const newItem: Product = {
      id,
      price,
      title,
      description,
    };

    dispatch(cartActions.addItemToCart(newItem));
  };

  const removeItemHandler = (): void => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
