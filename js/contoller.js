import GalleryModel from './model.js';
import GalleryView from './view.js';

export default class GalleryController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }

    async showGallery() {
      const images = await this.model.fetchImages();
      this.view.createGallery(images);
      this.view.filterClick(this.handleFilter.bind(this));
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