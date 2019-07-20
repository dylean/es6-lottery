import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';

const copyProperties = function (target, source) {//深度拷贝
  for (let key of Reflect.ownKeys(source)) {//选择性拷贝
    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, key);//从原对象拿到
      Object.defineProperty(target, key, desc);
    }
  }
};

//实现类的多重继承
//多重继承的方法
const mix = function (...mixins) {
  class Mix {
  }

  for (let mixin of mixins) {
    copyProperties(Mix, mixin);//深度拷贝
    copyProperties(Mix.prototype, mixin.prototype);//拷贝原型
  }
  return Mix
};

class Lottery extends mix(Base, Calculate, Interface, Timer) {
  constructor(name = 'syy', cname = '11选5', issue = '**', state = '**') {
    super();
    this.name = name;
    this.cname = cname;
    this.issue = issue;
    this.state = state;
    this.el = '';
    this.omit = new Map();//遗漏
    this.open_code = new Set();//开奖号码
    this.open_code_list = new Set();//开奖记录
    this.play_list = new Map();//玩法列表
    this.number = new Set();//选号
    this.issue_el = '#curr_issue';//期号选择器
    this.countdown_el = '#countdown';//倒计时选择器
    this.state_el = '.state_el';//状态选择器
    this.cart_el = '.codelist';//购物车选择器
    this.omit_el = '';//遗漏选择器
    this.cur_play = 'r5';//默认玩法
    this.initPlayList();//玩法列表初始化
    this.initNumber();//选号初始化
    this.updateState();//状态更新
    this.initEvent();//事件初始化
  }

  /**
   * [updateState 状态更新]
   * @return {[type]} [description]
   */
  updateState() {
    let self = this;
    this.getState().then(function (res) {
      self.issue = res.issue;//当前最新期号
      self.end_time = res.end_time;//最新销售截止时间
      self.state = res.state;//当前状态
      $(self.issue_el).text(res.issue);//更新当前期号
      self.countdown(res.end_time, function (time) {//倒计时更新
        $(self.countdown_el).html(time)
      }, function () {
        setTimeout(function () {
          self.updateState();//重新获取最新的销售状态
          self.getOmit(self.issue).then(function (res) {//获取最新遗漏

          });
          self.getOpenCode(self.issue).then(function (res) {//更新奖号

          })
        }, 500);
      })
    })
  }

  /**
   * [initEvent 初始化事件]
   * @return {[type]} [description]
   */
  initEvent() {
    let self = this;
    $('#plays').on('click', 'li', self.changePlayNav.bind(self));//bind绑定this指针指向
    $('.boll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(self));
    $('#confirm_sel_code').on('click', self.addCode.bind(self));
    $('.dxjo').on('click', 'li', self.assistHandle.bind(self));
    $('.qkmethod').on('click', '.btn-middle', self.getRandomCode.bind(self));
  }
}

export default Lottery;
