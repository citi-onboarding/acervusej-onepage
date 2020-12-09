const dotenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (req, res, next) => {
    try {
        const {name, email, subject, message, phoneNumber, reason} = req.body;

        const body = `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phoneNumber}
        Motivo: ${reason}
        Mensagem: ${message}`;

        await mailServer({
            destinationUser: process.env.EMAIL,
            subjectText: subject,
            textOption: body,
        });

        res.status(200).send('Everything is alright');
    } catch (error) {
        res.status(500).send('Ops, something is wrong');
        console.log(error);
    }
};

module.exports = sendMail;