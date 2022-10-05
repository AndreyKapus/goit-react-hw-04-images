import React from 'react';
import axios from 'axios';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { App } from 'components/App';
import css from './ImageGallry.module.css';

// key = 29432159-064ba5645d6ae7f18ff2bb6d2

export class ImageGallery extends React.Component {
  state = {
    picture: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=29432159-064ba5645d6ae7f18ff2bb6d2&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(res => this.setState({ picture: res.data.hits }))
        .catch(console.log('error'));
    }
  }

  render() {
    const { picture } = this.state;
    console.log(this.state.picture);
    return (
      <div>
        <ul className={css.ImageGallery}>
          {picture &&
            picture.map(({ id, webformatURL, tags, largeImageURL }) => (
              <li title={tags} key={id} className={css.ImageGalleryItem}>
                <img
                  src={largeImageURL}
                  alt="somepicture"
                  className={css.img}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
