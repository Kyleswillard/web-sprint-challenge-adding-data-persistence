// build your `/api/projects` router here
const express = require('express')
const projects = require('./model')

const pRouter = express.Router()

pRouter.get('/', async (req, res) => {
    try {
        const projectsArr = await projects.getAll()
        res.json(projectsArr)
    } catch (err) {
        res.status(500).json({
            message: 'Server Error! Please try again later!'
        })
    }
})
pRouter.post('/', async (req, res) => {
    const data = req.body
    if (!data) {
        res.status(400).json({ message: 'Please enter required fields!' })
    }
    try {
        const newProject = await projects.create(data)
        res.json(newProject)
    } catch (err) {
        res.status(500).json({
            message: 'Server Error! Please try again later!'
        })
    }
})

module.exports = pRouter
