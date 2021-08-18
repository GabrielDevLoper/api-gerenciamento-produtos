import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StatusProdutoDisponivel from 'App/Models/StatusProdutoDisponivel'

export default class StatusProdutoDisponivelSeederSeeder extends BaseSeeder {
  public async run() {
    await StatusProdutoDisponivel.createMany([
      {
        nome: 'DISPONÍVEL',
      },
      {
        nome: 'SEM ESTOQUE',
      },
    ])
  }
}
