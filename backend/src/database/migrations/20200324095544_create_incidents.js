exports.up = (knex) => {
  return knex.schema.createTable('incidents', (table) => {
    table.increments();

    table.string('title').notNullable();
    table.string('desciption').notNullable();
    table.string('price').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('incidents');
};
