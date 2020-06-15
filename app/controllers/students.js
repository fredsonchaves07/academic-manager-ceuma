const Student = require('../models/Student')

module.exports = {
    index(req, res){
        return res.render('students/index')
    },
    
    create(req, res){
        Student.courseSelect((option) => {
            return res.render('students/create', {courses: option})
        })   
    }
}