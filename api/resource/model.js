// build your `Resource` model here

const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}
const getById = (id) => {
    return db('resources').where({ id }).first()
}

const create = async (resourceData) => {
    const id = await db('resources').insert(resourceData)
    const newResource = await getById(id)
    return newResource
}

module.exports = {
    create,
    getAll,
    getById
}
