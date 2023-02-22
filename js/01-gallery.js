import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const picturesContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', galleryMarkup);

picturesContainer.addEventListener('click', onPicturesContainerClick);

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

function onPicturesContainerClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target.dataset.source);
}