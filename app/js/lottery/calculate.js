class Calculate {
  /**
   * [computeCount 计算注数]
   * @param  {number} active    [当前选中的号码]
   * @param  {string} play_name [当前的玩法标识]
   * @return {number}           [注数]
   */
  computeCount(active, play_name) {
    let count = 0;
    const exist = this.play_list.has(play_name);
    const arr = new Array(active).fill('0');
    if (exist && play_name.at(0) === 'r') {
      count = Calculate.combine(arr, play_name.split('')[1]).length;
    }
    return count;
  }

  /**
   * [computeBonus 奖金范围预测]
   * @param  {number} active    [当前选中的号码]
   * @param  {string} play_name [当前的玩法标识]
   * @return {array}           [奖金范围]
   */
  computeBonus(active, play_name) {
    const play = play_name.split('');// r2 -> ['r','2']
    const self = this;
    let arr = new Array(play[1] * 1).fill(0);
    let min, max;
    if (play[0] === 'r') {
      //开奖号码是5个
      let min_active = 5 - (11 - active);//最小命中数，彩票业务重点，业务了解即可
      if (min_active > 0) {
        if (min_active - play[1] >= 0) {
          //es6初始化数组填充功能
          arr = new Array(min_active).fill(0);
          //最小命中注数
          min = Calculate.combine(arr, play[1]).length;
        } else {
          //判断当前玩法是不是任6任7任8
          if (play[1] - 5 > 0 && active - play[1] >= 0) {
            arr = new Array(active - 5).fill(0);
            //重新计算最小值
            min = Calculate.combine(arr, play[1] - 5).length;
          } else {
            min = active - play[1] > -1 ? 1 : 0
          }
        }
      } else {//最小选中不是大于0
        min = active - play[1] > -1 ? 1 : 0;
      }

      let max_active = Math.min(active, 5);
      if (play[1] - 5 > 0) {
        if (active - play[1] >= 0) {
          arr = new Array(active - 5).fill(0);
          max = Calculate.combine(arr, play[1] - 5).length;
        } else {
          max = 0;
        }
      } else if (play[1] - 5 < 0) {
        arr = new Array(Math.min(active, 5)).fill(0);
        max = Calculate.combine(arr, play[1]).length;
      } else {
        max = 1;
      }
    }
    return [min, max].map(item => item * self.play_list.get(play_name).bonus);
  }

  /**
   * [combine 组合运算]
   * @param  {array} arr  [参与组合运算的数组]
   * @param  {number} size [组合运算的基数]
   * @return {number}      [计算注数]
   */
  static combine(arr, size) {
    let allResult = [];
    (function f(arr, size, result) {
      let arrLen = arr.length;
      if (size > arrLen) {
        return;
      }
      if (size === arrLen) {
        allResult.push([].concat(result, arr))
      } else {
        for (let i = 0; i < arrLen; i++) {
          let newResult = [].concat(result);
          newResult.push(arr[i]);
          if (size === 1) {
            allResult.push(newResult)
          } else {
            let newArr = [].concat(arr);
            newArr.splice(0, i + 1);
            f(newArr, size - 1, newResult)
          }
        }
      }

    })(arr, size, []);
    return allResult
  }

}

export default Calculate
