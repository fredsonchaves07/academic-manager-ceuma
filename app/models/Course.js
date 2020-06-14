const db = require('../config/db')

module.exports = {
    all(callback){
        db.query('SELECT * FROM courses', (err, results) => {
            if(err){
                return results.send('Database error!')
            }

            callback(results.rows)
        })
    },

    create(data, callback){
        const query = `
            INSERT INTO courses(
                coursename,
                ch,
                typecourse,
                created_at
            ) VALUES($1, $2, $3, $4)
            RETURNING cod
        `

        const values = [
            data.coursename,
            data.ch,
            data.typecourse,
            new Date().toISOString(),
        ]

        db.query(query, values, (err, results) => {
            if(err){
                console.log(err)
                return
            }

            callback(results.rows[0])
        })
    }
}