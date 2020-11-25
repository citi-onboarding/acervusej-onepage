const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const postController = require('../controllers/postController.js');
const aboutUsController = require('../controllers/aboutUsController');

module.exports = (app) => {
    app.use(cors());

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/api/posts', postController.getPostController);
    app.get('/api/about-us', aboutUsController.getAboutUsController);

    app.get('*', (req, res) => {
        res.redirect('/');
    });
};