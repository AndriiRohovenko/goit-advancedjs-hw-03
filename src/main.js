import { fetchSearchData, API_KEY } from './js/pixabay-api';
import { toCheck as check2 } from './js/render-functions';

const search_form = document.getElementById('search-form');
search_form.addEventListener('submit', search_image);

function search_image(event) {
  event.preventDefault();

  const search_phrase = event.currentTarget.elements.query.value;
  console.log(search_phrase);

  const request_options = {
    key: API_KEY,
    q: search_phrase,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  const promise_value = fetchSearchData(request_options).then(data => {
    console.log(data);
  });
  console.log(promise_value);
}
