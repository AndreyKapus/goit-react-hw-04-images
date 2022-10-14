import axios from 'axios';

export async function fetchImages(query, page) {
  const BASE_URL = `https://pixabay.com/api/`;
  const KEY = `29432159-064ba5645d6ae7f18ff2bb6d2`;
  const options = `image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const resolve = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${query}&${options}&page=${page}`
    );
    return resolve.data;
  } catch (error) {
    console.log(error);
  }
}

// key = '29432159-064ba5645d6ae7f18ff2bb6d2';
