##z-mq-service是什么?
基于[rsmq](https://github.com/smrchy/rsmq)实现的mq服务, 您可以使用[z-cli](https://github.com/zhonggithub/z-cli)工具初始化该工程到你的项目.

##如何使用
zcli init z-mqy-service
cd yourProject
npm i
npm run start
npm run startWorker

服务启动后，在其他的服务里像该服务post数据，数据格式见下表；详见tests 测试用例;

**请求参数说明**

|参数名称|类型|是否必填|说明|
|---|---|---|---|
|path|String|是|处理mq消息回调，z-mq-service将向path 发送post请求，你应该在相关的服务里吗处理该请求|
|data|JSON|是|z-mq-service向path发送post请求的数据|
|delay|int|否|消息延迟秒数|

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件: quitjie@gmail.com
* QQ: 1006817093