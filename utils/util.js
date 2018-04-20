const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const orderID = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day, hour, minute, second].map(formatNumber).join('') + parseInt(Math.random()*100)
}

const orderDate = date => {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  if (hour >= 11) {
    var timestamp = Date.parse(date);
    timestamp = timestamp / 1000;
    var tomorrow_timetamp = timestamp + 24 * 60 * 60;
    //加一天的时间：
    var n_to = tomorrow_timetamp * 1000;
    var tomorrow_date = new Date(n_to);
    year = tomorrow_date.getFullYear()
    month = tomorrow_date.getMonth() + 1
    day = tomorrow_date.getDate()
  }

  return [year, month, day].map(formatNumber).join('/')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  orderID: orderID,
  orderDate: orderDate
}
