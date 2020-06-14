module.exports = {
    index(req, res){
        return res.render('courses/index')
    },
    
    create(req, res){
        return res.render('courses/create')
    }
}