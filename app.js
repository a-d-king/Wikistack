const express = require('express')
const morgan = require('morgan')
const { db, Page, User } = require('./models');
const wiki = require('./router/wiki.js')
const users = require('./router/user.js')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use('/wiki', wiki);
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res , next) => {
  res.redirect("/wiki")
})


db.authenticate()
    .then(() => {
        console.log('connected to the database');
})

const PORT = 3000;

const init = async () => {
    await db.sync({force: true});
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}
init();
