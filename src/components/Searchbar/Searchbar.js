import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { FcSearch } from 'react-icons/fc';

import styles from './Searchbar.module.css';

export const Searchbar = ({ changeSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = element => {
    setInput(element.currentTarget.value.toLowerCase());
  };

  const onSubmit = element => {
    element.preventDefault();
    if (input.trim() === '') {
      return Notiflix.Notify.failure('Please enter your query');
    }
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
};

// import { Component } from 'react';
// import css from './Searchbar.module.css';
// import PropTypes from 'prop-types';
// import { FiSearch } from 'react-icons/fi';

// class SearchForm extends Component {
//   state = { qwery: '' };

//   hendleChange = e => {
//     this.setState({ qwery: e.currentTarget.value });
//   };
//   hendleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.qwery);
//     if (this.state.qwery === '') {
//       alert('Input field is empty!');
//     }
//   };

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form onSubmit={this.hendleSubmit} className={css.SearchForm}>
//           <button type="submit" className={css.SearchFormButton}>
//             <FiSearch />
//             <span className={css.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={css.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.hendleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default SearchForm;
