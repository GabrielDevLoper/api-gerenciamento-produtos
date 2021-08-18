import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableProdutos extends BaseSchema {
  protected tableName = 'produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('codigo').unique().notNullable()
      table.string('nome').notNullable()
      table.bigInteger('quantidade_disponivel').notNullable()
      table.decimal('valor_und', 8, 2).notNullable()
      table.integer('id_usuario').unsigned().references('usuarios.id')
      table.integer('id_categoria').unsigned().references('categorias.id')
      table
        .integer('id_status_produto_disponivel')
        .unsigned()
        .references('status_produto_disponivel.id')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
