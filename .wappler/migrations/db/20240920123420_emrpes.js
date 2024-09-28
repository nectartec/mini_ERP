
exports.up = function(knex) {
  return knex.schema
    .table('financeiro', async function (table) {
      table.integer('empresa').unsigned();
      table.foreign('empresa').references('id').inTable('empresa').onUpdate('SET NULL').onDelete('SET NULL');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('financeiro', async function (table) {
      table.dropForeign('empresa');
      table.dropColumn('empresa');
    })
};
