const db = require('../config/db')

module.exports = {

    create(data, callback) {
        const query = `
            INSERT INTO students(
                name
                cpf,
                email,
                fone,
                cep,
                address,
                addressnumber,
                neighborhood,
                uf,
                city,
                course_cod,
                created_at
            ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
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
            data.city,
            data.course,
            new Date().toISOString(),
        ]

        db.query(query, values, (err, results) => {
            if(err){
                throw 'Database error!'
            }

            callback(results.rows[0])
        })
    },

    update(data, callback){
        const query = `
            UPDATE courses SET
            name = $1
            cpf = $2,
            email = $3,
            fone = $4,
            cep = $5,
            address = $6,
            addressnumber = $7,
            neighborhood = $8,
            uf = $9,
            city = $10,
            course_cod = $11,
            WHERE cod = $12
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
            data.city,
            data.course_cod,
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
    }
}