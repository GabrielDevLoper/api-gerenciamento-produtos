import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Perfil from './Perfil'

export default class Usuario extends BaseModel {
  public static table = 'usuarios'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public email: string

  @column()
  public senha: string

  @column()
  public ativo: boolean

  @column()
  public id_perfil: number

  @hasOne(() => Perfil, {
    localKey: 'id_perfil',
  })
  public perfil: HasOne<typeof Perfil>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
