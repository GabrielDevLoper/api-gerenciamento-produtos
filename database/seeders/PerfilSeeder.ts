import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Perfil from 'App/Models/Perfil'

export default class PerfilSeederSeeder extends BaseSeeder {
  public async run() {
    await Perfil.createMany([
      {
        nome: 'Administrador',
      },
      {
        nome: 'Gestor',
      },
    ])
  }
}
