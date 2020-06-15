const db = require('../config/db')

module.exports = {
    courseSelect(callback){
        db.query(`SELECT coursename, cod FROM courses`, (err, results) =>{
            if(err){
                throw `Database error! ${err}`
            }

            callback(results.rows)
        })
    }
}