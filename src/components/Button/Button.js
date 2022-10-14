import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" className={styles.button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

// import css from './Button.module.css';
// import PropTypes from 'prop-types';

// const Button = ({ onClick }) => {
//   return (
//     <button className={css.Button} type="button" onClick={onClick}>
//       Load more
//     </button>
//   );
// };

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

// export default Button;
