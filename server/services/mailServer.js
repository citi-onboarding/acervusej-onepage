const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async ({
    destinationUser,
    subjectText,
    htmlOption,
    textOption,
}) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ACERVUS,
            pass: process.env.PASSWORD_ACERVUS,
        },
        tls : { rejectUnauthorized: false }
    });

    await transporter.sendMail({
        from: process.env.EMAIL_ACERVUS,
        to: destinationUser,
        subject: subjectText,
        html: htmlOption,
        text: textOption,
    });
};