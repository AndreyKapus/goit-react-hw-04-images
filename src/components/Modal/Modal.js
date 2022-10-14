import { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export const Modal = ({ modalImg, tags, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = element => {
      if (element.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = element => {
    if (element.currentTarget === element.target) {
      onCloseModal();
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={handleBackdropClick}>
        <div>
          <img src={modalImg} alt={tags} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

