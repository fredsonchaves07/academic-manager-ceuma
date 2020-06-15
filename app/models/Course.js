const db = require('../config/db')

module.exports = {
    all(callback){
        db.query('SELECT * FROM courses', (err, results) => {
            if(err){
                throw `Database error! ${err}` 
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
                throw 'Database error!'
            }

            callback(results.rows[0])
        })
    },

    find(id, callback){
        db.query(`SELECT * 
                  FROM courses 
                  WHERE cod = $1`, [id], (err, results) =>{
                    if(err){
                        throw `Database error! ${err}` 
                    }

                    callback(results.rows[0])
        })
    },

    update(data, callback){
        const query = `
            UPDATE courses SET
            coursename = $1,
            ch = $2,
            typecourse = $3
            WHERE cod = $4
        ` 

        const values = [
            data.coursename,
            data.ch,
            data.typecourse,
            data.cod
        ]

        db.query(query, values, (err, results) =>{
            if(err){
                throw `Database error! ${err}` 
            }

            callback()
        })
    },

    delete(cod, callback){
        db.query(`DELETE FROM courses WHERE cod = $1`, [cod], (err, results) =>{
            if(err){
                throw `Database error! ${err}` 
            }

            callback()
        })
    }
}