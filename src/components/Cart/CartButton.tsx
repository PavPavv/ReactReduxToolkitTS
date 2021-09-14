import { uiActions } from '../../store/ui-slice';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';

import classes from './CartButton.module.css';

const CartButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = (): void => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
