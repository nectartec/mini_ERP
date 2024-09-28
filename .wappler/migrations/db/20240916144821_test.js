
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('empresa');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('empresa', 29);
    })
};
