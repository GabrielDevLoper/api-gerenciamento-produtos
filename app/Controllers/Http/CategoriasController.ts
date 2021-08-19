import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categoria from 'App/Models/Categoria'

import CreateCategoriaValidator from 'App/Validators/Categoria/CreateCategoriaValidator'
import UpdateCategoriaValidator from 'App/Validators/Categoria/UpdateCategoriaValidator'

export default class CategoriasController {
  public async index({}: HttpContextContract) {
    const categorias = await Categoria.all()

    return categorias
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['nome'])

    try {
      await request.validate(CreateCategoriaValidator)

      const categoria = await Categoria.create(data)

      return categoria
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params

    const categoria = await Categoria.find(id)

    if (!categoria) {
      return response.notFound({ message: 'Categoria não encontrada' })
    }

    return categoria
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { id } = params

    const data = request.only(['nome'])

    const categoria = await Categoria.find(id)

    if (!categoria) {
      return response.notFound({ message: 'Categoria não encontrada' })
    }

    try {
      await request.validate(UpdateCategoriaValidator)

      await categoria?.merge(data).save()

      return categoria
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params

    const categoria = await Categoria.findOrFail(id)

    await categoria.delete()
  }
}
