const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

const app = express()

const PORT = 3001 

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/registration', (req, res) => {
    if(!req.body.email || !req.body.pass) return res.sendStatus(400)
    const message = {
        to: req.body.email,
        subject: 'Congratulations!',
        html: `
        <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>

        <i>Данные вашей учётной записи:</i>
        <ul>
            <li>login: ${req.body.email}</li>
            <li>password: ${req.body.pass}</li>
        </ul>

        ${req.body.promo ? `Вы подписаны на рассылку наших акций и предложений,
        чтобы отписаться от рассылки перейдите по ссылке
        <a href="http://localhost:3001/unsubscribe/${req.body.email}">отписаться от рассыки</a>` : ''}
        <p>Данное письмо не требует ответа!</p>`
    }
    mailer(message)
    user = req.body
    res.redirect('/registration')
})
app.get('/registration', (req, res) => {
    if(typeof user !=='object') return res.sendFile(__dirname + '/registration.html')
    res.send(`Регистрация прошла успешно! Данные отправлены на email: ${user.email}`)
    user = undefined
})
app.get('/unsubscribe/:email', (req, res) => {
    console.log(`${req.params.email} unsubscribed`)
    res.send(`Ваш email: ${req.params.email} удалён из списка рассылки`)
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/registration`))