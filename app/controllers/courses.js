const Course = require('../models/Course')

module.exports = {
    index(req, res){
        return res.render('courses/index')
    },
    
    create(req, res){
        return res.render('courses/create')
    },

    post(req, res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fieds')
            }
        }

        Course.create(req.body, (course) =>{

            return res.redirect(`courses/${course.cod}`)
            
        })

    },

    show(req, res){
        Course.find(req.params.cod, (course) => {
            if(!course){
                return res.send('Course not found!')
            }

            return res.render('courses/show', {course})
        })
    },

    edit(req, res){
        Course.find(req.params.cod, (course) => {
            if(!course){
                return res.send('Course not found!')
            }
            return res.render('courses/edit', {course})
        })
    },

    put(req, res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fieds')
            }
        }

        Course.update(req.body, () =>{
            return res.redirect(`courses/${req.body.cod}`)
        })
    },

    delete(req, res){
        Course.delete(req.body.cod, () =>{
            return res.redirect('/')
        })
    }
}