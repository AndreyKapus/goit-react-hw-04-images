import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';

const axios = require('axios');

// const api_key = '29432159-064ba5645d6ae7f18ff2bb6d2';

export class App extends React.Component {
  state = {
    picture: '',
  };

  handleFormSubmit = picture => {
    this.setState({ picture });
    console.log(picture);
  };

  // componentDidMount() {
  //   axios
  //     .get(
  //       'https://pixabay.com/api/?q=cat&page=1&key=29432159-064ba5645d6ae7f18ff2bb6d2&image_type=photo&orientation=horizontal&per_page=12'
  //     )
  //     .then(picture => this.setState({ picture }));
  // }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
