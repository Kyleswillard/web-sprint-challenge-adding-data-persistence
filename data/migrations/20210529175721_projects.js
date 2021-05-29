exports.up = function (knex) {
    return knex.schema
        .createTable('projects', (tbl) => {
            tbl.increments('project_id')
            tbl.string('project_name').notNullable().unique()
            tbl.string('project_description')
            tbl.integer('project_completed')
        })
        .createTable('resources', (tbl) => {
            tbl.increments('resource_id')
            tbl.string('resource_name').notNullable().unique()
            tbl.string('resource_description')
        })
        .createTable('tasks', (tbl) => {
            tbl.increments('task_id')
            tbl.string('task_description').notNullable()
            tbl.string('task_notes')
            tbl.integer('task_completed')
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects')
}
