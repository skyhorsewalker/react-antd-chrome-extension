console.log('Background script loaded!');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('background-scripts======')
  new Promise((resolve, reject) => {
    if (typeof request !== 'object' || !request.type) {
      console.error('参数异常')
      reject(`消息 ${JSON.stringify(request)} 格式不符合规范`)
      return
    }
    switch (request.type) {
      case 'vip':
        fetch(request.url, {
          // headers: {
          //   'Content-Type': 'application/json',
          //   // AppId: config.appId,
          //   // Authorization: buildAuthorization()
          // },
          method: 'GET',
          // method: 'POST',
          // body: JSON.stringify(request.obj), //这里必须匹配 'Content-Type' 注意! GET 或 HEAD 方法的请求不能包含 body 信息。
          timeout: 5000
        }).then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          resolve(res.json())
        }).catch((error) => console.log(error))
        break
      case 'test':
        resolve('测试')
        break
    }
  }).then((res) => {
    sendResponse(res)
  })
  return true
})