import generateArray from '../generate-array';
import {quickSort} from './index';

const arr = generateArray(10);
console.log(`初始化数据：${arr}`)
const i = quickSort(arr);
console.log(`处理后数据：${i}`);
