class Timer {
  countdown(end, update, handle) {
    const now = new Date().getTime();//取当前时间
    const self = this;//获取当前对象指针
    if (now - end) {
      handle.call(self);//如果当前时间大于截止时间，说明倒计时结束
    } else {//倒计时没有结束
      let last_time = end - now;//剩余时间
      const px_d = 1000 * 60 * 60 * 24;
      const px_h = 1000 * 60 * 60;
      const px_m = 1000 * 60;
      const px_s = 1000;
      const d = Math.floor(last_time / px_d);
      const h = Math.floor((last_time - d * px_d) / px_h);
      const m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
      const s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
      const r = [];
      if (d > 0) {
        r.push(`<em>${d}</em>天`);
      }
      if (r.length || (h > 0)) {
        r.push(`<em>${h}</em>时`);
      }
      if (r.length || (m > 0)) {
        r.push(`<em>${m}</em>分`);
      }
      if (r.length || (s > 0)) {
        r.push(`<em>${s}</em>秒`);
      }
      self.last_time = r.join('');
      update.call(self, r.join(''));
      setTimeout(function () {
        self.countdown(end, update, handle);
      }, 1000);
    }
  }
}
