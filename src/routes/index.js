import Router from 'koa-router';
import rawBody from 'raw-body';
import fs from 'fs';
import mqRouter from './mqRouter';

const getBody = async (ctx, next) => {
  try {
    const body = await rawBody(ctx.req);
    ctx.request.body = JSON.parse(body);
  } catch (err) {
    ctx.throw(err, 400);
  }
  await next();
};

const router = new Router();

router.post('/api/mq/:version/messages', getBody, mqRouter.sendMsg);

router.get('*', async (ctx) => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(`${__dirname}/../public/index.html`);
});

export default (app) => {
  app
    .use(router.routes())
    .use(router.allowedMethods());
};
