
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('funcao');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('funcao');
    })
};
