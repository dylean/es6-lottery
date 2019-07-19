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

{
  //所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function (err) {
        reject(err);
      }
    });
  }

  function showImgs(imgs) {
    imgs.forEach(img => {
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('https://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('https://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('https://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs);
}

{
  //有一个图片加载完就添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function (err) {
        reject(err);
      }
    });
  }

  function showImgs(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('https://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('https://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('https://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs);
}
