import GalleryModel from './model.js';
import GalleryController from './contoller.js';

export default class GalleryView{
    constructor(galleryElement) {
      this.galleryElement = galleryElement;
    }

    createGallery(images) {
      images.forEach(img => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container'); 
        
        const imageElem = document.createElement('img');
        imageElem.src = img.url;
        imageElem.alt = img.title;
        imageElem.classList.add('resort-gallery__element'); 
        imageElem.setAttribute('data-category', img.category);

        const titleElem = document.createElement('p');
        titleElem.classList.add('resort-gallery__text'); 
        titleElem.textContent = img.title; /* add discr*/

        cardContainer.appendChild(imageElem);
        cardContainer.appendChild(titleElem);
        this.galleryElement.appendChild(cardContainer);
      });
  }
  


  setScrollEndEventListener() {
    window.addEventListener('scroll', async () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= docHeight - 50) {

        }
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