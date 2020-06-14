const express = require('express')
const students = require('./controllers/students')

const routes = express.Router()


routes.get('/', (req, res) =>{
    return res.render('index')
})

routes.get('/students', students.index)
routes.get('/students/create', students.create)

module.exports = routes
