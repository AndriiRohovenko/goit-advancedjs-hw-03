import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_BASE_URL = 'https://pixabay.com/api/';
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
  const request_url = `${API_BASE_URL}?${queryParams}`;
  return fetch(request_url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        const errorText =
          '❌ Sorry, there are no images matching your search query. Please try again!';
        showError(errorText);
        throw new Error(errorText);
      }
      return data.hits;
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
