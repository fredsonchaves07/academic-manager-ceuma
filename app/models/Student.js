const db = require('../config/db')

module.exports = {
    all(callback){
        db.query(`SELECT students.*, courses.coursename
                  FROM students 
                  LEFT JOIN courses 
                  on courses.cod = students.course_cod
                  `, (err, results) => {
            if(err){
                throw `Database error! ${err}` 
            }

            callback(results.rows)
        })
    },

    findBy(filter, callback){

        db.query(`SELECT students.*, courses.coursename
                  FROM students 
                  LEFT JOIN courses 
                  on courses.cod = students.course_cod
                  WHERE courses.coursename ILIKE '%${filter}%'
                  `, (err, results) => {
            if(err){
                throw `Database error! ${err}` 
            }

            callback(results.rows)
        })        
    },

    create(data, callback) {
        const query = `
            INSERT INTO students(
                name,
                cpf,
                email,
                fone,
                cep,
                address,
                addressnumber,
                neighborhood,
                uf,
                state,
                city,
                course_cod,
                created_at
            ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
            RETURNING cod
        `

        const values = [
            data.name,
            data.cpf,
            data.email,
            data.fone,
            data.cep,
            data.address,
            data.addressnumber,
            data.neighborhood,
            data.uf,
            data.state,
            data.city,
            data.course,
            new Date().toISOString(),
        ]

        db.query(query, values, (err, results) => {
            if(err){
                throw `Database error! ${err}` 
            }

            callback(results.rows[0])
        })
    },

    find(id, callback){
        db.query(`SELECT * 
                  FROM students 
                  WHERE cod = $1`, [id], (err, results) =>{
                    if(err){
                        throw `Database error! ${err}` 
                    }

                    callback(results.rows[0])
        })
    },

    update(data, callback){
        const query = `
            UPDATE students SET
            name = $1,
            cpf = $2,
            email = $3,
            fone = $4,
            cep = $5,
            address = $6,
            addressnumber = $7,
            neighborhood = $8,
            uf = $9,
            state = $10,
            city = $11,
            course_cod = $12
            WHERE cod = $13
        ` 

        const values = [
            data.name,
            data.cpf,
            data.email,
            data.fone,
            data.cep,
            data.address,
            data.addressnumber,
            data.neighborhood,
            data.uf,
            data.state,
            data.city,
            data.course,
            data.cod,
        ]

        db.query(query, values, (err, results) =>{
            if(err){
                throw `Database error! ${err}` 
            }

            callback()
        })
    },

    courseSelect(callback){
        db.query(`SELECT coursename, cod FROM courses`, (err, results) =>{
            if(err){
                throw `Database error! ${err}`
            }

            callback(results.rows)
        })
    },

    delete(cod, callback){
        db.query(`DELETE FROM students WHERE cod = $1`, [cod], (err, results) =>{
            if(err){
                throw `Database error! ${err}` 
            }

            callback()
        })
    }
}