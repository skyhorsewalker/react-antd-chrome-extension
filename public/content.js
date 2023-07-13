console.log('Content script loaded!');

/**
 * 向Chrome发送消息
 * @param message 消息
 */
function getData(message) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(message, resolve)
  })
}


function mine() {
  let vipName = '白金级会员'

  // const btn = document.getElementById('myBtn')
  const btn = document.createElement('button')
  if (btn) {
    btn.innerText = 'NiceSteven'
    btn.style.color = 'red'
    btn.addEventListener('click', function () {
      console.log('content-scripts======')
      getData({
        type: 'vip',
        url: `https://api.egiraffe.com.cn/common/vip?name=${vipName}`,
        // url: `http://localhost:5000/common/my/vip`,
        obj: {
          name: vipName
        }
      }).then((data) => {
        console.log(data)
      })
    })
  } else {
    console.log('no button!')
  }
  document.body.appendChild(btn)
}


mine()
