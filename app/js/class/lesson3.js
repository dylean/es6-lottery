{
  let regex = new RegExp('xyz', 'i');
  let regex2 = new RegExp(/xyz/i);

  console.log(regex.test('xyz123'), regex2.test('xyz123'));

  let regex3 = new RegExp(/xyz/ig, 'i');
  console.log(regex3.flags);
}

{
  let s = 'bbb_bbb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;
  //g 和 y 的区别。g不强调下一个字符开始匹配。会忽略下划线。
  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));

  console.log(a1.sticky, a2.sticky); // 判断是否开启y
}

{
  // u unicode
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); //理解成两个字符，4个字节
  console.log('u-1', /^\uD83D/u.test('\uD83D\uDC2A')); //4个字节当做一个字符

  console.log(/\u{61}/.test('a'));// 匹配小于两个字节长度的字符，换行符 回车符 行分隔符 段分隔符也不能识别
  console.log(/\u{61}/u.test('a'));

  console.log(`\u{20BB7}`);
  let s = '𠮷';
  console.log('u', /^.$/.test(s));
  console.log('u-2', /^.$/u.test(s));
  // 大于两个字节 加上 u 修饰符去识别

  console.log('test', /𠮷{2}/u.test('𠮷𠮷'));
}
