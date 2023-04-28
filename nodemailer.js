const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.me.com',
        port: 587,
        secure: false,
        auth: {
            user: 'vladislavfva@icloud.com',
            pass: 'awwt-cqoq-jehn-linr'
        }
    },
    {
        from: 'Vladislav Ferafontov <vlad@devvlad.com>',
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}

module.exports = mailer