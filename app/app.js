const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./router')
const methodOverride = require('method-override')

const server = express()

server.set('view engine', 'njk')

nunjucks.configure('app/views', {
    express: server
})


server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(router)

server.listen(5000, function(){
    console.log('Server is running...')
})