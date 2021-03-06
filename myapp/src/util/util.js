export function emailCheck(email) {
  var emailreg = /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  if (!emailreg.test(email)) {
    return false;
  }
  return true;
}
export function nameCheck(name) {
  var namereg = /^[\u4e00-\u9fa5]{2,4}/;
  if (!namereg.test(name)) {
    return false;
  }
  return true;
}

export function pwdCheck(pwd) {
  var pwdreg = /^\d{6}$/;
  if (!pwdreg.test(pwd)) {
    return false;
  }
  return true;
}
export function phoneNumCheck(phoneNUm) {
  var phoneNumreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!phoneNumreg.test(phoneNUm)) {
    return false;
  }
  return true;
}
export function addressCheck(address) {
  var addressreg = /[旌城上品][1-8][栋][1-9][0][1,2][号]$/;
  if (!addressreg.test(address)) {
    return false;
  }
  return true;
}
export function stringCheck(string) {
  var result = removeSpace(string);
  if (result.length === 0) {
    return false;
  }
  return true;
}

function removeSpace(string) {
  var result;
  result = string.trim();
  result = result.replace(/\s/g, '');
  return result;
}

export function timeFormat(time) {
  let date = new Date(time);
  let month = date.getMonth() + 1;
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let str = `${month}-${day} ${hour}:${minutes}`;
  return str;
}
