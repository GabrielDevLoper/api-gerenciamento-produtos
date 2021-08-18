import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableStatusProdutoDisponivels extends BaseSchema {
  protected tableName = 'status_produto_disponivel'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').unique().notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
