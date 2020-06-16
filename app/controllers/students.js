const Student = require('../models/Student')

module.exports = {

    index(req, res){
        Student.all((students) =>{
            return res.render('students/index', {students})
        })
    },
    
    create(req, res){
        Student.courseSelect((option) => {
            return res.render('students/create', {courses: option})
        })   
    },

    post(req, res){
        Student.create(req.body, (course) =>{

            return res.redirect(`/students`)
            
        })
    },

    show(req, res){
        Student.find(req.params.cod, (student) => {

            if(!student){
                return res.send('Student not found!')
            }

            Student.courseSelect((option) => {
                return res.render('students/show', {student, courses: option})
            })
            
        })
    },

    edit(req, res){
        Student.find(req.params.cod, (student) => {
            if(!student){
                return res.send('Student not found!')
            }

            Student.courseSelect((option) => {
                return res.render('students/edit', {student, courses: option})
            })  

        })
    },

    put(req, res){
        Student.update(req.body, () =>{
            return res.redirect(`/students`)
        })
    },

    delete(req, res){
        Student.delete(req.body.cod, () =>{
            return res.redirect('/students')
        })
    }
}