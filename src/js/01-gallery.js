// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//console.log(galleryItems);

const divGallery = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    (acc =
      acc +
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`),
  ''
);

divGallery.innerHTML += markup;

new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionPosition: 'botton',
  captionDelay: 250,
  animationSpeed: 500,
  fadeSpeed: 200,
});
