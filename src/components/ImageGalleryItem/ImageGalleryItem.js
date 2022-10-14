import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onModalOpen }) => {
  const { webformatURL, largeImageURL, tags } = image;
  const handleClick = modalImg => {
    onModalOpen(modalImg, tags);
  };

  return (
    <li
      className={styles.item}
      onClick={() => handleClick(largeImageURL, tags)}
    >
      <img className={styles.image} src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

// import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

// const ImageGalleryItem = ({ image, onClick }) => {
//   return (
//     <li className={css.ImageGalleryItem}>
//       <img
//         src={image}
//         alt=""
//         className={css.ImageGalleryItemImage}
//         onClick={onClick}
//       />
//     </li>
//   );
// };

// ImageGalleryItem.propTypes = {
//   image: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ImageGalleryItem;
