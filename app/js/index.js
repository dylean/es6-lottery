// import './class/lesson1'
// import 'babel-polyfill' //兼容库，处理兼容性，用于 es7的提案
// import './class/lesson17'

// import {A} from './class/lesson17'
// import * as lesson from './class/lesson17'
//
// // console.log(A);
// console.log(lesson.A);

import lesson17 from './class/lesson17'

console.log(lesson17.A);
lesson17.test();
let obj = new lesson17.Hello();
obj.test();
