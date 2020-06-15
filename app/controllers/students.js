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
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fieds')
            }
        }

        Student.create(req.body, (course) =>{

            return res.redirect(`/students`)
            
        })
    },

    show(req, res){
        Student.find(req.params.cod, (student) => {
            if(!student){
                return res.send('Student not found!')
            }

            return res.render('students/show', {student})
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
}