// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}
const getById = (id) => {
    return db('projects as p').where({ id }).first()
}

const create = async (projectData) => {
    const id = await db('projects').insert(projectData)
    const newProject = await getById(id)
    return newProject
}

module.exports = {
    create,
    getAll,
    getById
}
