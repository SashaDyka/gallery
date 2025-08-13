import GalleryModel from './model.js';
import GalleryController from './contoller.js';
import GalleryView from './view.js';


const galleryModel = new GalleryModel();
const galleryView = new GalleryView(document.getElementById('gallery'));
const galleryController = new GalleryController(galleryModel, galleryView);
galleryController.showGallery();
