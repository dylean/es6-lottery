//proxy 代理，用户拿的对象和原始对象，用户是不能直接操作原始对象的。
//reflect 反射
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    //拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018');
    },
    //拦截对象设置属性
    set(target, p, value, receiver) {
      if (p === 'name') {
        return target[p] = value;
      } else {
        return target[p];
      }
    },
    //拦截key in object操作
    has(target, key) {
      if (key === 'name') {
        return target[key];
      } else {
        return false;
      }
    },
    //拦截delete操作
    deleteProperty(target, p) {
      if (p.indexOf('_') > -1) {
        delete target[p];
        return true;
      } else {
        return target[p];
      }
    },
    //拦截object.keys,object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item !== 'time')
    }
  });
  console.log('get', monitor.time);
  monitor.time = '2019';
  monitor.name = 'mukewang';
  console.log(monitor, monitor.time);
  console.log('has', 'time' in monitor);
  delete monitor.time;
  console.log(monitor);
  delete monitor._r;
  console.log(monitor);
  console.log('ownKeys', Object.keys(monitor));

}

{
  //reflect
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };
  console.log(Reflect.get(obj, 'time'));
  console.log(Reflect.set(obj, 'name', 'javascript'), obj);
  console.log(Reflect.has(obj, 'name'));
}

{
  //和业务解耦

  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, p, value, receiver) {
        if (target.hasOwnProperty(p)) {
          let va = this._validator[p];
          if (!!va(value)) {
            return Reflect.set(target, p, value, receiver);
          } else {
            throw Error(`不能设置${p}为${value}`)
          }
        } else {
          throw Error(`${p} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    },
    mobile(val) {

    }
  };

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.mobile = '1111';
      return validator(this, personValidators);// this值Person的实例
    }
  }

  const person = new Person('lilei', 30);

  console.log(person);
  person.name = 'Han mei mei';
  console.log(person);
}
