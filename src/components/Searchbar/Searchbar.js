import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { FcSearch } from 'react-icons/fc';
import styles from './Searchbar.module.css';

export const Searchbar = ({ changeSearch, handleLoadMore }) => {
  const [input, setInput] = useState('');

  const handleSearch = element => {
    setInput(element.currentTarget.value.toLowerCase());
  };

  const onSubmit = element => {
    element.preventDefault();
    if (input.trim() === '') {
      return Notiflix.Notify.failure('Please enter your query.');
    }
    changeSearch(input);
    handleLoadMore();
    // setInput('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={onSubmit}>
        <button type="submit" className={styles.button}>
          <FcSearch className={styles.buttonIcon} />
          <span className={styles.buttonLabel}>Search</span>
        </button>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={input}
          onChange={handleSearch}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  changeSearch: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
