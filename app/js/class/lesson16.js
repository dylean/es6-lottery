/**
 * Decorator修饰器函数
 * 修改行为
 * 修改类的行为
 */

{
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
  };

  class Test {
    @readonly
    time() {
      return '2017-03-11'
    }
  }

  let test = new Test();

  /*test.time = function () {
    console.log('reset time');
  };*/
  console.log(test.time());
}

{
  let typename = function (target, name, descriptor) {
    target.myname = 'hello';
  };

  @typename
  class Test {

  }

  console.log(Test.myname); //类本身，类实例，类静态属性，类静态方法
  //第三方库修饰器的js库：core-decorators
}

{
  let log = type => {
    return function (target, name, descriptor) {
      let src_method = descriptor.value;
      descriptor.value = (...arg) => {
        src_method.apply(target, arg);
        console.log(`log ${type}`);
      }
    }
  };

  class AD {
    @log('show')
    show() {
      console.log('ad is show');
    }

    @log('click')
    click() {
      console.log('ad is click');
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();
}
