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

    }
}