import test from 'ava';
import fetchMock from 'fetch-mock';
import request from '../helpers/request';

test.afterEach.always(() => {
  fetchMock.restore();
});

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

test.serial('POST /api/mq/v1/messages ok', async (t) => {
  const res = await request.post('/api/mq/v1/messages').send({
    path: 'http://localhost:3001/api/account/v1/directories/58b52f4bf13b67751f2c2bc5/accounts',
    data: {
      name: 'zz',
      account: 'zz',
      email: 'quitjie@gmail.com',
    },
  });
  if (res.status >= 400) console.log(res.text);
  t.is(res.status, 201);
  console.log(res.body);
});

test.serial('POST /api/mq/v1/messages ok', async (t) => {
  const res = await request.post('/api/mq/v1/messages').send({
    path: 'http://localhost:3001/api/account/v1/directories/58b52f4bf13b67751f2c2bc5/accounts',
    data: {
      name: 'zz',
      account: 'zz',
      email: 'quitjie@gmail.com',
    },
    delay: 3600,
  });
  if (res.status >= 400) console.log(res.text);
  t.is(res.status, 201);
  console.log(res.body);
})