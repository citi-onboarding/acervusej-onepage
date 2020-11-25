const keystone = require('keystone');

const Service = keystone.list('Services');

module.exports = {
  getServiceController (req, res) {
    Service.model.find((err, data) =>{
        if(err){
          console.log(err);
          res.status(500).send('DB error')
        } else{
            res.status(200).json(data)
        }
    })
  }
}