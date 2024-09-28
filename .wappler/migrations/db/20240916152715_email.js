
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('email', 60).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('email', 30).alter();
    })
};
