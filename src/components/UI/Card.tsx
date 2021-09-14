import React from 'react';

import classes from './Card.module.css';

type CardProps = {
  className?: string;
  children: JSX.Element;
};

const Card = ({ className, children }: CardProps): JSX.Element => {
  return (
    <section
      className={`${classes.card} ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};

export default Card;
