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

// import css from './Modal.module.css';
// import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
// import { Component } from 'react';

// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.hendelKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.hendelKeyDown);
//   }
//   hendelKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.showModal();
//     }
//   };
//   hendelBecdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.showModal();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={css.Overlay} onClick={this.hendelBecdropClick}>
//         <div className={css.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
// Modal.propTypes = {
//   showModal: PropTypes.func.isRequired,
//   children: PropTypes.object.isRequired,
// };

// export default Modal;
