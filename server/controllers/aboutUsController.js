const keystone = require('keystone');

const AboutUs = keystone.list('AboutUs');

module.exports = {
    getAboutUsController(req, res) {
        AboutUs.model.find().populate('values').exec((err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }

            res.status(200).json(items);
        });
    }
}