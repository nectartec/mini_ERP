
exports.up = function(knex) {
  return knex.schema
    .createTable('financeiro', async function (table) {
      table.increments('id');
      table.date('data_criacao');
      table.integer('cliente').unsigned();
      table.foreign('cliente').references('id').inTable('clientes').onUpdate('SET NULL').onDelete('SET NULL');
      table.integer('fornecedor').unsigned();
      table.foreign('fornecedor').references('id').inTable('fornecedores').onUpdate('SET NULL').onDelete('SET NULL');
      table.date('data_vencimento');
      table.integer('valor');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('financeiro')
};
