export default class GalleryModel{
  constructor() {
    this.images = [];
  }

  async fetchImages() {
    try {
      const dataResponse  = await fetch(`data/data.json`);
      this.images = await dataResponse.json();
      return this.images;
    } catch (error) {
      console.error('Request failure error: ', error);
      return [];
    }
  }

  getImagesByCategory(category) {
    if (category === 'all') {
      return this.images; 
    } else {
      return this.images.filter(img => img.category === category);
    }
  }

    
}
  


