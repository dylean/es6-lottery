{
  // 声明
  let a1 = Symbol();
  let a2 = Symbol();
  //a1 a2 独一无二 永远不可能相等
  console.log(a1 === a2);
  let a3 = Symbol.for('a3');
  let a4 = Symbol.for('a3');
  console.log(a3 === a4);
}

{
  // 作用
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  };
  console.log('obj', obj);

  // let of for in 取不到 Symbol 属性
  for (let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value);
  }

  Object.getOwnPropertySymbols(obj).forEach(function (item) {
    console.log(obj[item])
  });

  console.log('reflect', Reflect.ownKeys(obj));
  // es6 新增加，返回 Symbol 和 非 Symbol 的属性
  Reflect.ownKeys(obj).forEach(function (item) {
    console.log('ownKeys', item, obj[item]);
  })
}
