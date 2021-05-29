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
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('resource_assignments', (tbl) => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('task_id')
                .inTable('tasks')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects')
}
