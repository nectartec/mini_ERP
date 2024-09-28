
exports.up = function(knex) {
  return knex.schema
    .table('financeiro', async function (table) {
      table.string('tipo');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('financeiro', async function (table) {
      table.dropColumn('tipo');
    })
};
