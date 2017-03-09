'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zError = require('z-error');

var _common = require('../common');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Author: Zz
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Date: 2017-03-09 11:51:28
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified by: Zz
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @Last Modified time: 2017-03-09 16:03:59
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


function isValidData(info) {
  const error = (0, _zError.verify)(info, ['path', 'data']);
  if (error) {
    return { is: false, error };
  }
  return { is: true, error };
}

exports.default = {
  sendMsg(ctx) {
    return _asyncToGenerator(function* () {
      const body = ctx.request.body;
      const judge = isValidData(body);
      if (!judge.is) {
        ctx.throw(judge.error, 422);
        return;
      }
      const result = yield _common.mq.add(body.path, body.data, body.delay);
      ctx.body = { id: result };
      ctx.status = 201;
    })();
  }
};