const keystone = require('keystone');

const contactReasons = keystone.list('ContactReasons');

module.exports = {
    getContactReason(req, res) {
        contactReasons.model.find((err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }

            res.status(200).json(items);
        });
    }
}