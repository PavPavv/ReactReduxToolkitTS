import Card from '../UI/Card';
import { Product } from '../../store/cart-slice';
import { useAppDispatch } from '../../store/storeHooks';
import { cartActions } from '../../store/cart-slice';

import classes from './ProductItem.module.css';

type ProductItemProps = {
  id: number;
  title: string; 
  price: number; 
  description: string;
};

const ProductItem = ({ id, title, price, description }: ProductItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const addToCartHandler = (): any => {
    const newProduct: Product = {
      id,
      title,
      price,
      description,
    };
    dispatch(cartActions.addItemToCart(newProduct));
  };

  return (
    <li className={classes.item}>
      <Card>
        <>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </>
      </Card>
    </li>
  );
};

export default ProductItem;
