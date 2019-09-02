//日期格式化
const fmtDate = (obj) => {
  var date = new Date(obj);

  var y = date.getFullYear();

  var m = "0" + (date.getMonth() + 1);

  var d = "0" + date.getDate();

  var h = "0" + date.getHours();

  var min = "0" + date.getMinutes();

  var s = "0" + date.getSeconds();

  // 参数二可以省略
  // substring() 用于提取字符串中 介于 两个指定下标之间的字符。
  return (
    y +
    "." +
    m.substring(m.length - 2, m.length) +
    "." +
    d.substring(d.length - 2, d.length) +
    " " +
    h.substring(h.length - 2, h.length) +
    ":" +
    min.substring(min.length - 2, min.length) +
    ":" +
    s.substring(s.length - 2, s.length)
  );
}
//获取日期差
const getTime = (hisTime, nowTime) => {
  console.log('===')
  if (!arguments.length) return "";
  var arg = arguments,
    now = arg[1] ? arg[1] : new Date().getTime(),
    diffValue = now - arg[0],
    result = "",
    minute = 1000 * 60,
    hour = minute * 60,
    day = hour * 24,
    halfamonth = day * 15,
    month = day * 30,
    year = month * 12,
    _year = diffValue / year,
    _month = diffValue / month,
    _week = diffValue / (7 * day),
    _day = diffValue / day,
    _hour = diffValue / hour,
    _min = diffValue / minute;

  if (_year >= 1) result = parseInt(_year) + "年前";
  else if (_month >= 1) result = parseInt(_month) + "个月前";
  else if (_week >= 1) result = parseInt(_week) + "周前";
  else if (_day >= 1) result = parseInt(_day) + "天前";
  else if (_hour >= 1) result = parseInt(_hour) + "个小时前";
  else if (_min >= 1) result = parseInt(_min) + "分钟前";
  else result = "刚刚";
  return result;
}



function setTimes(value) {
  var theTime = parseInt(value); //秒
  var theTime1 = 0; //分
  var theTime2 = 0; //时
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);
    }
  };
  var theTime_y = parseInt(theTime);
  if (theTime_y < 10) {
    theTime_y = '0' + theTime_y
  }
  var results = "" + theTime_y;
  if (theTime1 > 0 || theTime1 == 0) {
    var theTime1_y = parseInt(theTime1);
    if (theTime1_y < 10) {
      theTime1_y = '0' + theTime1_y;
    }
    results = "" + theTime1_y + ":" + results;
  }
  if (theTime2 > 0 || theTime2 == 0) {
    var theTime2_y = parseInt(theTime2);
    if (theTime2_y < 10) {
      theTime2_y = '0' + theTime2_y;
    }
    results = "" + theTime2_y + ":" + results;
  }
  return results;
};


export default {
  getTime,
  fmtDate,
  setTimes
};
