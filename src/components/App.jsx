import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from '../Services/searchApi';

import styles from '../App.module.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);
  const [totalImg, setTotalImg] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    fetchImages(query, page)
      .then(images => {
        const pictures = images.hits.map(
          ({ id, webformatURL, tags, largeImageURL }) => ({
            id,
            webformatURL,
            tags,
            largeImageURL,
          })
        );

        if (!images.hits.length) {
          Notiflix.Notify.failure('Please try again.');
        }

        if (page === 1 && images.hits.length) {
          Notiflix.Notify.success(
            `We found 500 pictures ${images.totalHits} images.`
          );
        }

        const totalPage = images.totalHits / (page * images.hits.length);
        if (totalPage <= 1) {
          Notiflix.Notify.info(`We have no more pictures.`);
        }
        setImages(images => [...images, ...pictures]);
        setTotalImg(images.totalHits);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [page, query]);

  const handleLoadMore = element => {
    setPage(page + 1);
  };

  const changeSearch = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const toggleModal = (modalImg, tags) => {
    setIsModal(!isModal);
    setModalImg(modalImg);
    setTags(tags);
  };

  return (
    <div className={styles.App}>
      <Searchbar changeSearch={changeSearch} />
      <ImageGallery images={images} toggleModal={toggleModal} />
      {loading && <Loader />}
      {images.length > 0 && images.length < totalImg && (
        <Button handleLoadMore={handleLoadMore} />
      )}
      {isModal && (
        <Modal modalImg={modalImg} onCloseModal={toggleModal} tags={tags} />
      )}
      {error && <>{error.message}</>}
    </div>
  );
};

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import css from '../App.module.css';
// import searchApi from 'Services/searchApi';
// import SearchForm from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery';
// import Button from './Button';
// import Loader from './Loader';
// import Modal from './Modal';

// class App extends Component {
//   state = {
//     pictures: [],
//     page: 1,
//     query: '',
//     largeImage: '',
//     imgTags: '',
//     error: '',
//     showModal: false,
//     isLoading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.query !== this.state.query) {
//       this.fetchPictures();
//     }
//     if (this.state.page !== 2 && prevState.page !== this.state.page) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   }

//   toggleModal = () => {
//     this.setState(state => ({
//       showModal: !state.showModal,
//     }));
//   };

//   bigImage = (largeImage = '') => {
//     this.setState({ largeImage });

//     this.toggleModal();
//   };

//   fetchPictures = () => {
//     const { page, query } = this.state;

//     const options = {
//       page,
//       query,
//     };

//     this.setState({ isLoading: true });

//     searchApi(options)
//       .then(pictures => {
//         this.setState(prevState => ({
//           pictures: [...prevState.pictures, ...pictures],
//           page: prevState.page + 1,
//         }));
//       })
//       .catch(error => this.setState({ error: 'Picture not found' }))
//       .finally(() => this.setState({ isLoading: false }));
//   };
//   onChangeQwery = query => {
//     if (query !== this.state.query) {
//       this.setState({
//         query: query,
//         page: 1,
//         pictures: [],
//         error: null,
//       });
//     }
//     if (query === this.state.query) {
//       this.setState({ page: this.state.page + 1 });
//     }
//   };

//   render() {
//     const { pictures, isLoading, error, showModal, largeImage, imgTags } =
//       this.state;

//     return (
//       <div className={css.App}>
//         <SearchForm onSubmit={this.onChangeQwery} />

//         {error && <h1>{error}</h1>}

//         <ImageGallery pictures={pictures} bigImage={this.bigImage} />
//         {isLoading && <Loader />}
//         {pictures.length > 11 && !isLoading && (
//           <Button onClick={this.fetchPictures} />
//         )}
//         {showModal && (
//           <Modal showModal={this.bigImage}>
//             <img src={largeImage} alt={imgTags} />
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }
// App.propTypes = {
//   pictures: PropTypes.array,
//   page: PropTypes.number,
//   query: PropTypes.string,
//   largeImage: PropTypes.string,
//   imgTags: PropTypes.string,
//   error: PropTypes.string,
//   showModal: PropTypes.bool,
//   isLoading: PropTypes.bool,
// };
// export default App;
