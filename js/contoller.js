import GalleryModel from './model.js';
import GalleryView from './view.js';

export default class GalleryController {
    constructor(model, view, apiUrl) {
      this.model = model;
      this.view = view;
      this.apiUrl =this.apiUrl;
      this.showGallery();
    }

    async showGallery() {
      const images = await this.model.fetchImages();
      this.view.createGallery(images);
      this.view.filterClick(this.handleFilter.bind(this));

      this.setupScrollListener();
    }


    
    setupScrollListener() {
      window.addEventListener('scroll', async () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= scrollHeight - 50) {
          const newImages = await this.model.fetchImages(this.apiUrl);
          if (newImages.length > 0) {
            this.view.createGallery(newImages);
          }
        }
      });
    }

    handleFilter(category) {
      let filteredImages;

      if (category === 'all') {
          filteredImages = this.model.getAllImages(); 
          } else {
          filteredImages = this.model.getImagesByCategory(category);
      }
      
      this.view.createGallery(filteredImages);
      this.view.resetScroll();
    }

    resetScroll() {
      this.cardsContainer.scrollLeft = 0;
    }
}