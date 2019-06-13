require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      auth_ctrl = require('./controllers/authController')
const app = express()
const {CONNECTION_STRING, SERVER_PORT,SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: false,
  resave:false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

massive(CONNECTION_STRING).then((db) => {
  app.set('db',db) // the 'db' is us choosing the name, and the database is the information, which matches the response from .then above.
  console.log('All your Database are now belong to us',db.listTables())
  app.listen(SERVER_PORT, () => console.log(`listening on port:${SERVER_PORT}`))
})

app.post('/auth/register',auth_ctrl.register)
app.post('/auth/login',auth_ctrl.login)
app.post('/auth/createproject', auth_ctrl.createproject)
app.get('/auth/details', auth_ctrl.getDetails)
app.get('/auth/user', auth_ctrl.getUser)
app.get('/auth/logout', auth_ctrl.logout)
app.get('/auth/project', auth_ctrl.getProject)
app.delete('/auth/deleteproject/:id', auth_ctrl.deleteProject)
app.put('/auth/editProject/:id', auth_ctrl.editProject)
