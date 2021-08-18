import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import StatusProdutoEntradaSaida from 'App/Models/StatusProdutoEntradaSaida'

export default class StatusProdutoEntradaSaidaSeederSeeder extends BaseSeeder {
  public async run() {
    await StatusProdutoEntradaSaida.createMany([
      {
        nome: 'ENTRADA',
      },
      {
        nome: 'SAÍDA',
      },
    ])
  }
}
