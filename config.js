// 服务端后台请求地址
let txHost = '59431301.qcloud.la';
let ampHost = 'restapi.amap.com';

let config = {
  service: {
    txHost,
    // 登录地址，用于建立会话
    loginUrl: `https://${txHost}/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `https://${txHost}/user`,

    // 测试的信道服务地址
    tunnelUrl: `https://${txHost}/tunnel`,
  },
  amap: {
    key: '89007d7ada7f4a257ab3c1453a52c025'
  }
};

module.exports = config;
