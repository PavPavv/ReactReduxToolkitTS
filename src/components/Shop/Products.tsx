import ProductItem from './ProductItem';
import { Product } from '../../store/cart/cart-slice';

import classes from './Products.module.css';

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    price: 6,
    title: 'My book',
    description: 'The first book',
  },
  {
    id: 2,
    price: 8,
    title: 'Another book',
    description: 'The second book',
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product: Product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
