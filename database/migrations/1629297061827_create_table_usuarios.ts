import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableUsuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('cpf').unique().notNullable()
      table.string('email').unique()
      table.string('senha').notNullable()
      table.boolean('ativo').defaultTo(1)
      table.integer('id_perfil').unsigned().references('perfis.id')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
