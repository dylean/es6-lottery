{
  function test(x, y = 'World') {
    console.log('默认值', x, y);
  }

  test('hello');
}

{
  let x = 'test';

  function test2(x, y = x) {
    console.log('作用域', x, y);
  }

  test2('kill')
}

{
  //rest 参数
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest', v)
    }
  }

  test3(1, 2, 3, 4, 5);
}

{
  console.log(...[1, 2, 4]);
  console.log('a', ...[1, 2, 3, 4]);
}

{
  //做箭头函数的时候一定要注意 this 绑定
  let arrow = v => v * 2;
  console.log(arrow(3));
}

{
  //尾调用，函数式编程的概念
  //提升性能
  function tail(x) {
    console.log('tail', x)
  }

  function fx(x) {
    return tail(x)
  }

  fx(123)
}

