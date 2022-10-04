import React from 'react';
import css from './Searchbar.module.css';
import { FaSearchLocation } from 'react-icons/fa';

export class Searchbar extends React.Component {
  state = {
    picture: '',
  };

  handlePicNameChange = event => {
    this.setState({ picture: event.currentTarget.value.toLowerCase() });
    // console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.picture.trim() === '') {
      alert('Введите название картинки');
      return;
    }
    this.props.onSubmit(this.state.picture);

    this.setState({ picture: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <FaSearchLocation />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handlePicNameChange}
          />
        </form>
      </header>
    );
  }
}
