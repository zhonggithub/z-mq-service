/*
 * @Author: Zz
 * @Date: 2017-03-09 11:51:28
 * @Last Modified by: Zz
 * @Last Modified time: 2017-03-09 16:03:59
 */
import { verify } from 'z-error';
import { mq } from '../common';

function isValidData(info) {
  const error = verify(info, ['path', 'data']);
  if (error) {
    return { is: false, error };
  }
  return { is: true, error };
}

export default {
  async sendMsg(ctx) {
    const body = ctx.request.body;
    const judge = isValidData(body);
    if (!judge.is) {
      ctx.throw(judge.error, 422);
      return;
    }
    const result = await mq.add(body.path, body.data, body.delay);
    ctx.body = { id: result };
    ctx.status = 201;
  },
};
