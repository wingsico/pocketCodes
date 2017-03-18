var ajax = function(method, url, cb, data, dataType) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    xhr.open(method.toUpperCase(), url, true)
    if (method.toLowerCase() == 'get') {
      xhr.send(data)
    } else {
      var contentType = 'application/json'
      if (dataType) {
        if (dataType.toLowerCase() == 'json') {
          contentType = 'application/json'
        }
      }
      xhr.setRequestHeader("Content-type", contentType)
      xhr.send(data)
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 500 || xhr.status === 404) {
          alert("失败!") // 跳转至错误页面。可以自己定义
        }
        if (xhr.status === 200) {
          cb(xhr.responseText);
        }
      }
    }
  }
  // 一个获取节点的函数，不懂得话可以用document.getElementById()
  var query = function(one) {
    return document.querySelector(one)
  }
  // var useMsg = function() {
  //   ajax('get', 'https://api.github.com/', callMsg)
  // }
  // var callMsg = function(data) {
  //   var jsonData = JSON.parse(data)
  //   console.log(jsonData) // 注意查看随时console返回的东西
  //     // 这里处理的正确的操作
  //   alert('lalalala')
  // }
  // var loginUs = function() {
  //   var data = {
  //     name: query('.name').value,
  //     password: query('.password').value
  //   }
  //   var jsonData = JSON.stringify(data)
  //   ajax('post', 'https://api.github.com/', login, jsonData)
  // }
  // var login = function(data) {
  //   var jsonData = JSON.parse(data)
  //   console.log(jsonData);
  // }
  // 调用ajax
  // query('#login').addEventListener('click', loginUs, false)
  // query('#getMsg').addEventListener('click', useMsg, false)