const keystone = require('keystone');

const contact = keystone.list('Contact');

module.exports = {
    getContactReason(req, res) {
        contact.model.find((err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }

            res.status(200).json(items);
        });
    }
}