
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('nome', 50).alter();
      table.string('email', 30).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('nome', 8).alter();
      table.string('email', 25).alter();
    })
};
