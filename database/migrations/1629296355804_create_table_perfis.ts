import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTablePerfis extends BaseSchema {
  protected tableName = 'perfis'

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
