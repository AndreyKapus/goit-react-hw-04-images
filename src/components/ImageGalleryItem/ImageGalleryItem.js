import React from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from '../ImageGallery/ImageGallry.module.css';

export default class ImageGalleryItem extends React.Component {
  render() {
    const { picture } = this.props;
    return (
      picture &&
      picture.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className={css.ImageGalleryItem}>
          <img src={webformatURL} alt="somepicture" className={css.img} />
        </li>
      ))
    );
  }
}
