import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

class SearchForm extends Component {
  state = { qwery: '' };

  hendleChange = e => {
    this.setState({ qwery: e.currentTarget.value });
  };
  hendleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.qwery);
    if (this.state.qwery === '') {
      alert('Input field is empty!');
    }
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.hendleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <FiSearch />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hendleChange}
          />
        </form>
      </header>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
