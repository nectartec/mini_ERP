
exports.up = function(knex) {
  return knex.schema
    .createTable('fornecedores', async function (table) {
      table.increments('id');
      table.string('nome');
      table.string('email');
      table.string('whatsapp');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('fornecedores')
};
