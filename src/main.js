import { fetchSearchData, API_KEY } from './js/pixabay-api';
import { renderImageMarkup } from './js/render-functions';

const search_form = document.getElementById('search-form');
search_form.addEventListener('submit', search_image);

function search_image(event) {
  event.preventDefault();

  const search_phrase = event.currentTarget.elements.query.value;
  fetchSearchData(search_phrase).then(data => {
    console.log(data);
    renderImageMarkup(data);
  });
}
