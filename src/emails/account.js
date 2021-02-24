const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
  }
});

const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        from: 'test123mattt@gmail.com',
        to: email,
        subject: 'Thanks for joining in!',
        html: `<h1>Welcome ${name}</h1><p>Let me know how you get along with the app.</p>`
    })
}

const sendCancelatonEmail = (email, name) => {
    transporter.sendMail({
        from: 'test123mattt@gmail.com',
        to: email,
        subject: 'Sorry to see you go!',
        html: `<h1>Goodbye ${name}</h1><p>I hope to see you back sometime soon.</p>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelatonEmail
}