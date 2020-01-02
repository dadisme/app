import { get, post } from '@/util/http';
export const login = params => post('Login', params);
export const reg = params => post('Reg', params);
export const reset = params => post('Reset', params);
export const aboutUser = params => post('aboutUser', params);
export const aboutHouse = params => post('aboutHouse', params);
export const aboutManager = params => post('aboutManager', params);
export const waterRate = params => post('waterRate', params);
export const electricRate = params => post('electricRate', params);
export const gasRate = params => post('gasRate', params);
export const propertyRate = params => post('propertyRate', params);
export const repairsApply = params => post('repairsApply', params);
export const houseManager = params => post('houseManager', params);
export const propertyComplain = params => post('propertyComplain', params);
export const noticePage = () => get('notice');
export const noticeDetail = params => post('noticeDetail', params);
export const activityPage = () => get('Activity');
export const activityDetail = params => post('activityDetail', params);
export const sendName = params => post('sendName', params);
export const bindCard = params => post('bindCard', params);
export const addCard = params => post('addCard', params);
export const deleteCard = params => post('deleteCard', params);
export const paypwd = params => post('paypwd', params);
export const paypwdDetail = params => post('paypwdDetail', params);















