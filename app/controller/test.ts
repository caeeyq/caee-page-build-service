import { Controller } from 'egg'

export default class TestController extends Controller {
  async index() {
    const { ctx } = this
    const query = ctx.query
    const params = ctx.params
    const body = ctx.request.body
    const resp = {
      query,
      params,
      body,
    }
    ctx.helper.success({ ctx, resp })
  }

  async getDog() {
    const { service, ctx } = this
    const dogResp = await service.dog.show()
    await ctx.render('dogshow.nj', { url: dogResp.message })
  }
}
