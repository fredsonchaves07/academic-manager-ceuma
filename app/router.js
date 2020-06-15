const express = require('express')
const students = require('./controllers/students')
const courses = require('./controllers/courses')

const routes = express.Router()


routes.get('/', (req, res) =>{
    return res.render('index')
})

/* Students route */
routes.get('/students', students.index)
routes.get('/students/create', students.create)


/* Courses route*/
routes.get('/courses', courses.index)
routes.get('/courses/create', courses.create)
routes.get('/courses/:cod', courses.show)
routes.get('/courses/:cod/edit', courses.edit)

routes.post('/courses', courses.post)
routes.put('/courses', courses.put)

module.exports = routes
