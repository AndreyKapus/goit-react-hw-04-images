import React from 'react';
import axios from 'axios';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { App } from 'components/App';
import css from './ImageGallry.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

// key = 29432159-064ba5645d6ae7f18ff2bb6d2

export class ImageGallery extends React.Component {
  state = {
    picture: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.pictureName !== this.props.pictureName ||
      prevProps.page !== this.props.page
    ) {
      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.pictureName}&page=${this.props.page}&key=29432159-064ba5645d6ae7f18ff2bb6d2&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(res => this.setState({ picture: res.data.hits }))
        .catch(console.log('error'));
    }
  }

  render() {
    return (
      <div>
        <ul className={css.ImageGallery}>
          <ImageGalleryItem picture={this.state.picture} />
        </ul>
      </div>
    );
  }
}
