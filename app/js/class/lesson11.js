//proxy 代理
//reflect 反射
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  let monitor=new Proxy(obj,{

  });

  monitor
}
