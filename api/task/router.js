// build your `/api/tasks` router here
const express = require('express')
const tasks = require('./model')

const tRouter = express.Router()

tRouter.get('/', async (req, res) => {
    try {
        const tasksArr = await tasks.getAll()
        res.json(tasksArr)
    } catch (err) {
        res.status(500).json({
            message: 'Server Error! Please try again later!'
        })
    }
})
tRouter.post('/', async (req, res) => {
    const data = req.body
    if (!data) {
        res.status(400).json({ message: 'Please enter required fields!' })
    }
    try {
        const newProject = await tasks.create(data)
        res.json(newProject)
    } catch (err) {
        res.status(500).json({
            message: 'Server Error! Please try again later!'
        })
    }
})

module.exports = tRouter
