{
  //简洁表示法
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.log(es5, es6);

  let es5_method = {
    hello: function () {
      console.log('hello')
    }
  };
  let es6_method = {
    hello() {
      console.log('hello')
    }
  };
  es5_method.hello();
  es6_method.hello()
}

{
  //属性表达式
  let a = 'b';
  let es5_obj = {
    a: 'c',
    b: 'c'
  };
  let es6_obj = {
    [a]: 'c'
  };
  console.log(es5_obj, es6_obj)
}

{
  //API
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
  console.log('数组', Object.is([], []), [] === []);
  //数组也是引用类型
  //两个数组引用的是两个不同的地址
  console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}));
  //这里是浅拷贝

  let test = {k: 123, o: 456};
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]);
  }
  //配合entries 不要values
}

// {
//   //扩展运算符
//   let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ddd', d: 'ccc'};
//   //c 解析出来是个对象，如果还有通通赋值到c对象上
// }
