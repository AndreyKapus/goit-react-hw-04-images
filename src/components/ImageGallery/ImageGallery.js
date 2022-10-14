import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          onModalOpen={toggleModal}
          image={image}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

