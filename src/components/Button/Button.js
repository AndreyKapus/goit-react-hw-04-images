import React from 'react';
import css from './Button.module.css';

export const Button = ({ LoadMore }) => {
  return (
    <div className={css.wraper}>
      <button className={css.ButtonLoad} type="button" onClick={LoadMore}>
        Load more
      </button>
    </div>
  );
};
