import GalleryModel from './model.js';
import GalleryController from './contoller.js';

export default class GalleryView{
    constructor(galleryElement) {
      this.galleryElement = galleryElement;
    }

    createGallery(images) {
      this.galleryElement.innerHTML = '';

      images.forEach(img => {
        const imageElem = document.createElement('img'); 
        imageElem.src = img.url;
        imageElem.alt = img.title;
        imageElem.setAttribute('data-category', img.category);
        imageElem.classList.add('resort-gallery_element'); /*----- */
        this.galleryElement.appendChild(imageElem);
      });
    }
  
    filterClick(handler) {
        const filterButtons = document.querySelectorAll('.type-button');
        filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            handler(category); 
        });
    });
  }

  resetScroll() {
    this.galleryElement.scrollTop = 0; 
  }

}