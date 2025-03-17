import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;

// need to remove it to env variables or secured storage
export const API_KEY = '49355059-ef28fa3d6cd8d2c420ac797e4';

export function fetchSearchData(search_phrase) {
  const request_options = {
    key: API_KEY,
    q: search_phrase,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  const queryParams = new URLSearchParams(request_options).toString();
  const request_url = `?${queryParams}`;
  return axios
    .get(request_url)
    .then(response => {
      if (!response.data.hits || response.data.hits.length === 0) {
        const errorText =
          '❌ Sorry, there are no images matching your search query. Please try again!';
        showError(errorText);
        throw new Error(errorText);
      }
      return response.data.hits;
    })
    .catch(error => console.error('Error fetching data:', error));
}

export function showError(errorText) {
  iziToast.show({
    title: '',
    message: errorText,
    backgroundColor: '#FF5B61',
    titleColor: 'white',
    messageColor: 'white',
    position: 'topRight',
  });
}
