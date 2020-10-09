const router = require('express').Router();
const nodemailer = require('nodemailer');


// Nodemailer routes for contact form
router.post('/api/contact-form', (req, res, next) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}<p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587, 
            auth: {
                user: 'orin79@ethereal.email',
                pass: 'mMVuW2tkXWFFH8yHPd' 
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'orin79@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })
});

module.exports = router;