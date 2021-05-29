// build your server here and require it from index.js
const express = require('express')
const projects = require('./project/router')

const server = express()

// Routes
server.use('/api/projects', projects)
// Routes

module.exports = server
