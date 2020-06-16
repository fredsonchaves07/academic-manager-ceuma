const db = require('../config/db')

module.exports = {
    confirmDelete(cod, callback){
        db.query(`SELECT count(students) total_students
                  FROM courses
                  INNER JOIN students
                  ON students.course_cod = courses.cod
                  WHERE courses.cod = $1
                  `, [cod], (err, results) => {
                if(err){
                    throw 'Database error!'
                }
        
                callback(results.rows[0])
        })
    },

    all(callback){
        db.query(`SELECT courses.*, count(students) AS total_students
                  FROM courses
                  LEFT JOIN students
                  ON students.course_cod = courses.cod
                  GROUP BY courses.cod
                  ORDER BY total_students DESC`, (err, results) => {
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
        db.query(`SELECT courses.*, count(students) total_students
                  FROM courses
                  LEFT JOIN students
                  on students.course_cod = courses.cod
                  WHERE courses.cod = $1
                  GROUP BY courses.cod`, [id], (err, results) =>{
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