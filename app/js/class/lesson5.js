{
  console.log(0b111111);//二进制，大小写都可
  console.log(0o776);//八进制
}

{
  console.log('15', Number.isFinite(15));//判断数是不是有尽的
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite(1 / 0));

  console.log('NaN', Number.isNaN(NaN)); //判断是不是数
  console.log('0', Number.isNaN(0)); //判断是不是数
}

{
  // 参数必须是一个数，字符串返回false
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.1', Number.isInteger(25.1));
  console.log('25.1', Number.isInteger('25'));
}

{
  // 判断 -2^53 ~ 2^53 之间
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
  console.log('10', Number.isSafeInteger(10));
  console.log('10', Number.isSafeInteger('a'));
}

{
  console.log(4.1, Math.trunc(4.1));// 只取整数部分
}

{
  //判断胜负0，字符串会自动转化成数字 1 0 -1 NaN
  console.log('-5', Math.sign(-5));
  console.log('0', Math.sign(0));
  console.log('5', Math.sign(5));
  console.log('50', Math.sign('50'));
  console.log('foo', Math.sign('foo'));//返回 NaN
}

{
  //立方根
  console.log(-1, Math.cbrt(-1));
  console.log(8, Math.cbrt(8));
  //三角函数方法，对数方法
}
