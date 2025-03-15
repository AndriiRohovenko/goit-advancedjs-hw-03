import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function renderImageMarkup(images) {
  const galleryMarkup = images
    .map(
      img => `
    <li class="gallery-item">
  <a class="gallery-link" href="${img.largeImageURL}">
    <img
      class="gallery-image"
      src="${img.webformatURL}"
      data-source="${img.largeImageURL}"
      alt="${img.tags}"
    />
  </a>
</li>
  `
    )
    .join('');

  gallery.innerHTML = galleryMarkup;

  const gallery_config = {
    captionsData: 'alt',
    captionDelay: 250,
  };
  new SimpleLightbox('.gallery-link', gallery_config);
}
