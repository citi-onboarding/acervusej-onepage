const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const postController = require('../controllers/postController.js');
const postService = require('../controllers/postServices.js');
const bannerController  = require('../controllers/bannerController'); 

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', postController.getPostController);
  app.get('/api/services',postService.getServiceController);
  app.get('/api/banners', bannerController.getBannerController);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};