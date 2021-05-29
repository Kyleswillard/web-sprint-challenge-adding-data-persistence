// build your `Task` model here

const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
}
const getById = (id) => {
    return db('tasks').where({ id }).first()
}

const create = async (taskData) => {
    const id = await db('tasks').insert(taskData)
    const newTask = await getById(id)
    return newTask
}

module.exports = {
    create,
    getAll,
    getById
}
