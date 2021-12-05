import { Context, EggAppConfig } from 'egg'
import { appendFileSync } from 'fs'

export default (options: EggAppConfig['myLogger']) =>
  async (ctx: Context, next: () => Promise<any>) => {
    const startTime = Date.now()
    console.log(options)
    await next()
    const ms = Date.now() - startTime
    const log = `${ctx.method} -- ${ctx.url} -- ${ms}ms`
    appendFileSync('./logs/myLogger.log', log + '\n')
  }
