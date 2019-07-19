//Promise
/*
# 什么是异步？
- 回调、事件触发
# Promise的作用
- 解决异步操作问题
# Promise的基本用法
 */
{
  //es5中回调解决异步
  //ajax过程
  let ajax = function (callback) {
    console.log('执行1');
    setTimeout(function () {
      callback && callback.call()
    }, 1000)
  };
  ajax(function () {
    console.log('timeout1');
  });
}

{
  let ajax = function () {
    console.log('执行2');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000)
    })
  };
  ajax().then(function () {
    console.log('timeout2');
  })
}

{
  let ajax = function () {
    console.log('执行3');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000)
    })
  };

  ajax()
    .then(function () {
      return new Promise(function (resolve, reject) {
        resolve();
      }, 2000)
    })
    .then(function () {
      console.log('timeout3');
    })
}

{
  let ajax = function (num) {
    console.log('执行4')
    return new Promise(function (resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error('出错了');
      }
    })
  };
  ajax(3).then(function () {
    console.log('log', 6);
  }).catch(function (err) {
    console.log('catch', err);
  });
}
