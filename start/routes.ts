import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/categorias', 'CategoriasController').apiOnly()
Route.resource('/perfis', 'PerfisController').apiOnly()
