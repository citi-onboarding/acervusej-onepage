const keystone = require('keystone');

const AboutUs = keystone.list('AboutUs');
const Values = keystone.list('Values')

module.exports = {
    getAboutUsController(req, res) {
        AboutUs.model.find().populate('Values').exec((err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }

            res.status(200).json(items);
        });
    },

    getValuesController(req, res) {
        Values.model.find((err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            } else {
                res.send(data);
            }
        });
    }
}