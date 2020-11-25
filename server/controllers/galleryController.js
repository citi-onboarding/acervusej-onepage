const keystone = require('keystone');

const gallery = keystone.list('Gallery');

module.exports = {
    getGallery(req, res) {
        gallery.model.find((err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }

            res.status(200).json(items);
        });
    }
}