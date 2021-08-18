import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'
import Categoria from './Categoria'
import StatusProdutoDisponivel from './StatusProdutoDisponivel'

export default class Produto extends BaseModel {
  public static table = 'produtos'

  @column({ isPrimary: true })
  public id: number

  @column()
  public codigo: string

  @column()
  public nome: string

  @column()
  public quantidade_disponivel: number

  @column()
  public valor_und: number

  @column()
  public id_usuario: number

  @column()
  public id_categoria: number

  @column()
  public id_status_produto_disponivel: number

  @hasOne(() => Usuario, {
    localKey: 'id_usuario',
  })
  public usuario: HasOne<typeof Usuario>

  @hasOne(() => Categoria, {
    localKey: 'id_categoria',
  })
  public categoria: HasOne<typeof Categoria>

  @hasOne(() => StatusProdutoDisponivel, {
    localKey: 'id_status_produto_disponivel',
  })
  public status_produto_disponivel: HasOne<typeof StatusProdutoDisponivel>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
