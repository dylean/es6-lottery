{
  let arr = Array.of(3, 4, 5, 7, 9, 11);
  console.log('arr=', arr);

  let empty = Array.of(); // 返回空数组
  console.log(empty);
}

{
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);//将集合转换成数组
  pArr.forEach(function (item) {
    console.log(item.textContent);
  });

  console.log(Array.from([1, 3, 5], function (item) {
    return item * 2;
  }))
}

{
  console.log('fill-7', [1, 'a', undefined].fill(7));
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3));
}

{
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys', index); //keys() return index of array
  }
  for (let value of ['1', 'c', 'ks'].values()) {
    console.log('values', value);
  }
  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.log('entries', index, value);
  }
}

{
  //当前数组内部，把指定位置的成员复制到其他位置，使用频率不高
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
  //查找 find findIndex
  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].find(function (item) {
    return item > 3;
  }))//find only find the first not find others
  console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].findIndex(function (item) {
    return item > 3;
  }))//find the index
}

{
  // return true of false
  console.log('number', [1, 2, NaN].includes(1));
  console.log('number', [1, 2, NaN].includes(NaN));
}
