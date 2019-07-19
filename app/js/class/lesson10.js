// set weakset map weakmap
// set 对比 array  map 对比 object
// set 无重复元素 map 键可以是任何值

{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size', list.size);
}

{
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);
  console.log(list)
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log(list);

  let arr = [1, 2, 3, 1, '2'];
  let list2 = new Set(arr);
  console.log('unique', list2);
}

{
  //api
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('has', list.has('add'));
  console.log('delete', list.delete('add'));
  list.clear();
  console.log(list);
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log('keys', key);
  }

  for (let value of list.values()) {
    console.log('value', value);
  }

  list.forEach(function (item) {
    console.log(item);
  })
}

{
  //weakset 元素只能是对象；对象都是弱引用，不会和垃圾回收机制挂钩
  //地址引用，不会检测垃圾回收
  let weakList = new WeakSet();

  let arg = {};

  weakList.add(arg);

  console.log(weakList);
}

{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 456);
  console.log('map', map, map.get(arr))//取值
}

{
  let map = new Map([['a', 123], ['b', 234]]);
  console.log('map args', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}

{
  //key值只能是对象 没有set 不能使用clear 不能遍历
  let weakMap = new WeakMap();

  let o = {};
  weakMap.set(o, 123);
  console.log(weakMap.get(o));
}

{
  // 数据结构横向对比，增删改查
  let map = new Map();
  let array = [];
  //增
  map.set('t', 1);
  array.push({t: 1});
  console.info('map-array', map, array);
  //查
  let map_exist = map.has('t');
  let array_exist = array.find(item => item.t);
  console.log('map-array', map_exist, array_exist);
  //改
  map.set('t', 2);
  array.forEach(item => item.t ? item.t = 2 : '');
  console.log('map-array-modify', map, array);
  //删
  map.delete('t');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.log('map-array', map, array);

  {
    //set 和 array 的对比
    let set = new Set();
    let array = [];
    let obj = {t: 1};
    //增
    set.add(obj);
    array.push({t: 1});
    console.log('set-array', set, array);
    //查
    let set_exist = set.has(obj);
    let array_exist = array.find(item => item.t);
    console.log('set-array', set_exist, array_exist);
    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('set-array-modify', set, array);
    //删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log('set-array-empty', set, array);
  }

  {
    //map,set,object对比
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};
    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    console.log('map-set-obj', map, set, obj);
    //查
    console.log({
      map_exist: map.has('t'),
      set_exist: set.has(item),
      obj_exist: 't' in obj
    });
    //改
    map.set('t', 2);
    set.forEach(item => item.t ? item.t = 2 : '');
    obj['t'] = 2;
    console.log(map, set, obj);
    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log(map, set, obj);
  }
}
