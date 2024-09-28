
exports.up = function(knex) {
  return knex.schema
    .createTable('empresa', async function (table) {
      table.increments('id');
      table.string('empresa');
    })
    .table('users', async function (table) {
      table.string('senha');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('senha');
    })
    .dropTable('empresa')
};
