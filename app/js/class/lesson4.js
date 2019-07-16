{
  console.log('a', `\u0061`);
  console.log('s', `\u20BB7`); // 超过了 0xFFFF

  console.log('s', `\u{20BB7}`);
  let s = '𠮷';
}

{
  let s = '𠮷';
  console.log('length', s.length); // 2
  console.log('0', s.charAt(0));// 去字符
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0));//取Unicode码值
  console.log('at1', s.charCodeAt(1));

  let s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0));
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code2', s1.codePointAt(2));
}

{
  //区别是处理大于 0xffff的字符
  console.log(String.fromCharCode("0x20bb7")); // es5
  console.log(String.fromCodePoint("0x20bb7")); //es6
}

{
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }

  for (let code of str) {
    console.log('es6', code);
  }
}

{
  let str = "string";
  console.log('includes', str.includes('r'));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ng'));
}

{
  let str = 'abc';
  console.log(str.repeat(2));
}

//模板字符串
{
  let name = 'list';
  let info = 'hello world';
  let m = `i am ${name},${info}`;
  console.log(m);
}

{
  console.log('1'.padStart(2, '0')); //补白，补前面，选日期
  console.log('2'.padEnd(2, '0'));
}

//标签模板（难以理解）
{//块作用域
  let user = {
    name: 'list',
    info: 'hello world'
  };
  abc`i am ${user.name},${user.info}1231213`;

  function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2;
  }
}

{
  console.log(String.raw`Hi\n${1 + 2}`);//对斜杠进行转义 使用频率很低
  console.log(`Hi\n${1 + 2}`);
}

