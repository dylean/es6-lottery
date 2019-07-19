{
  //基本定义和生成实例
  class Parent {
    constructor(name = 'qindi') {
      this.name = name;//给对象实例增加name
    }
  }

  let v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
}

{
  class Parent {
    constructor(name = 'qindi') {
      this.name = name;//给对象实例增加name
    }
  }

  class Child extends Parent {

  }

  console.log('继承', new Child());
}

{
  class Parent {
    constructor(name = 'qindi') {
      this.name = name;//给对象实例增加name
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name);
      this.type = 'child';
    }
  }

  console.log('继承传递参数', new Child());
}

{
  //getter,setter
  class Parent {
    constructor(name = 'dyqin') {
      this.name = name;
    }

    get longName() {
      return 'qd' + this.name;
    }

    set longName(val) {
      this.name = val;
    }
  }

  let v = new Parent();
  console.log('getter', v.longName);
  v.longName = 'hello';
  console.log(v.longName);
}

{
  //静态方法
  class Parent {
    constructor(name = 'dyqin') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.tell();
}

{
  //静态属性
  class Parent {
    constructor(name = 'dyqin') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.type = 'test';
  console.log(Parent.type);// 实例和类
}
