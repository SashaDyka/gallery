export default class GalleryModel{
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.limit = 10;
    this.isLoading = false;
  }

  async fetchImages() {
    if(this.images.length === 0){
      try {
        const dataResponse = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        this.images = await dataResponse.json();
        return this.images;
      } catch (error) {
        console.error('Request failure error: ', error);
        return [];
      }  
    }

    const nextImages = this.images.slice(this.currentIndex, this.currentIndex + this.limit);
    this.currentIndex += nextImages.length;
    return nextImages;
  }


  getImagesByCategory(category) {
    if (category === 'all') {
      return this.images; 
    } else {
      return this.images.filter(img => img.category === category);
    }
  }

  getAllImages() {
    return this.images;
  }
    

}

