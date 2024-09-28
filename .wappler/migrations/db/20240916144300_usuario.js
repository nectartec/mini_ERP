
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.renameColumn('first_name', 'nome');
      table.dropColumn('last_name');
      table.dropColumn('gender');
      table.renameColumn('company', 'empresa');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.renameColumn('nome', 'first_name');
      table.string('last_name', 10);
      table.string('gender', 6);
      table.renameColumn('empresa', 'company');
    })
};
