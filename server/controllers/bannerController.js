const keystone = require('keystone');

const Banner = keystone.list('Banners');

module.exports = {

  getBannerController (req, res) {
    Banner.model.find((err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      } 
     res.status(200).json(items)
    });
  }
}