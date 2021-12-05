import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router, middleware } = app

  const myLogger = middleware.myLogger({ allowMethods: ['POST'] })

  router.get('/', controller.home.index)
  router.get('/test/play/:id', myLogger, controller.test.index)
  router.get('/test/dog', controller.test.getDog)
}
