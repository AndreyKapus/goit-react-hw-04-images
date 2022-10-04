import React from 'react';
import axios from 'axios';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { App } from 'components/App';

// key = 29432159-064ba5645d6ae7f18ff2bb6d2

export class ImageGallery extends React.Component {
  state = {
    picture: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
      console.log('prev.props', prevProps.pictureName);
      console.log('this.props', this.props.pictureName);

      axios
        .get(
          `https://pixabay.com/api/?q=${this.props.pictureName}&page=1&key=29432159-064ba5645d6ae7f18ff2bb6d2&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(res => this.setState({ picture: res.data.hits }))
        .catch(console.log('error'));
      console.log(this.state.picture);

      console.log('Изменилась картинка');
    }
  }

  render() {
    const { picture } = this.props;
    console.log(this.state.picture);
    return (
      <div>
        <ul className="gallery">
          {picture &&
            picture.map(img => (
              <li title={img.tags} key={img.id}>
                <img src={img.largeImageURL} alt="somepicture" width={300} />
                <span>какой-то текст</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
