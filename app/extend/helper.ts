import { Context } from 'egg'

interface SuccessParams {
  ctx: Context
  resp?: any
  msg?: string
}

export default {
  /**
   * 规范请求成功返回数据
   */
  success({ ctx, resp, msg = '请求成功' }: SuccessParams) {
    ctx.body = {
      errno: 0,
      data: resp ? resp : null,
      message: msg,
    }
    ctx.status = 200
  },
}
