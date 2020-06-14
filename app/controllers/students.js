module.exports = {
    index(req, res){
        return res.render('students/index')
    },
    
    create(req, res){
        return res.render('students/create')
    }
}