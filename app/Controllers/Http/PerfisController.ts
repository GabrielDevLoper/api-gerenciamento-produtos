import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Perfil from '../../Models/Perfil'
import CreatePerfilValidator from '../../Validators/Perfil/CreatePerfilValidator'
import UpdatePerfilValidator from '../../Validators/Perfil/UpdatePerfilValidator'

export default class PerfisController {
  public async index({ request }: HttpContextContract) {
    const { nome } = request.qs()

    const perfis = await Perfil.query().where((query) => {
      if (nome) {
        query.where('nome', 'like', `%${nome}%`)
      }
    })

    return perfis
  }

  public async store({ request, response }: HttpContextContract) {
    const { nome } = request.body()

    try {
      await request.validate(CreatePerfilValidator)

      const perfil = await Perfil.create({ nome })

      return perfil
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params

    const perfil = await Perfil.findOrFail(id)

    return perfil
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { id } = params

    const perfil = await Perfil.findOrFail(id)

    if (!perfil) {
      return response.notFound('Perfil não encontrad')
    }

    const data = request.only(['nome'])

    try {
      await request.validate(UpdatePerfilValidator)

      await perfil.merge(data).save()

      return perfil
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params

    const perfil = await Perfil.findOrFail(id)

    await perfil.delete()
  }
}
