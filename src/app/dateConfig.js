//import index from "../views/index.html"


function dateConfig($mdDateLocaleProvider){
  $mdDateLocaleProvider.months = ['一月', '二月', '三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  $mdDateLocaleProvider.shortMonths = ['一月', '二月', '三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  $mdDateLocaleProvider.days = ['星期天', '星期一', '星期二','星期三', '星期四', '星期五', '星期六'];
  $mdDateLocaleProvider.shortDays = ['一', '二', '三','四','五','六','日'];
}

dateConfig.$inject = ['$mdDateLocaleProvider'];
export default dateConfig;