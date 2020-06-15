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
routes.get('/students/:cod', students.show)
routes.get('/students/:cod/edit', students.edit)

routes.post('/students', students.post)
/*routes.put('/students', students.put)
routes.delete('/students', students.delete)*/


/* Courses route*/
routes.get('/courses', courses.index)
routes.get('/courses/create', courses.create)
routes.get('/courses/:cod', courses.show)
routes.get('/courses/:cod/edit', courses.edit)

routes.post('/courses', courses.post)
routes.put('/courses', courses.put)
routes.delete('/courses', courses.delete)
module.exports = routes
