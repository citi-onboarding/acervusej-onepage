const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const postController = require('../controllers/postController.js');
const aboutUsController = require('../controllers/aboutUsController');
const serviceController = require('../controllers/serviceController.js');
const bannerController = require('../controllers/bannerController');
const galleryController = require('../controllers/galleryController');

module.exports = (app) => {
    app.use(cors());

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/api/posts', postController.getPostController);
    app.get('/api/about-us', aboutUsController.getAboutUsController);
    app.get('/api/services', serviceController.getServiceController);
    app.get('/api/banners', bannerController.getBannerController);
    app.get('/api/gallery', galleryController.getGallery);

    app.get('*', (req, res) => {
        res.redirect('/');
    });
};