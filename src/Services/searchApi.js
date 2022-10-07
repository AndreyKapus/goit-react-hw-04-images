import axios from 'axios';

const key = '29432159-064ba5645d6ae7f18ff2bb6d2';

const searchApi = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data.hits);
};

export default searchApi;
