const express = require('express')
const resources = require('./model')

const rRouter = express.Router()

rRouter.get('/', async (req, res) => {
    try {
        const resourcesArr = await resources.getAll()
        res.json(resourcesArr)
    } catch (err) {
        res.status(500).json({
            message: 'Server Error! Please try again later!'
        })
    }
})
rRouter.post('/', async (req, res) => {
    const data = req.body
    if (!data) {
        res.status(400).json({ message: 'Please enter required fields!' })
    }
    try {
        const newProject = await resources.create(data)
        res.json(newProject)
    } catch (err) {
        res.status(500).json({
            message: 'Server Error! Please try again later!'
        })
    }
})

module.exports = rRouter
