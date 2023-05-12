const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,
    auth: {
      user: 'vladislavfva@icloud.com',
      pass: 'awwt-cqoq-jehn-linr'
    }
  });

  const mailOptions = {
    from: email,
    to: 'recipient-email-address',
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully.');
    }
  });
});

app.listen(443, () => {
  console.log('Server started on port 443');
});