import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const picturesContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(items) {
  return galleryItems.map(({ preview, original, description })=> {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }).join('');
}

