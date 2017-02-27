//reportStatController.js

import EventBus from 'angular-es-utils/event-bus';
export default class reportStatController {
  //构造函数中引入依赖,需加上aaaController.$inject = ['XXX'];
  constructor($interval,$timeout,httpService,utils,dialog) {
    this.httpservice = httpService;
    this.interval = $interval;
    this.ut = utils;
    this.timeout=$timeout;
    this.dialog = dialog;
    this.init();
    this.startDate="";
    this.endDate="";
    this.tasks="";
    this.taskId=0;
    this.getTasks()
  }
  //controller中的方法
  init(){
  }
  search(){
  	this.httpservice.postData("operatelog/reportstat",{taskId:this.taskId+""}).then(
  		function onSuccess(response) {
	       if (response.data.success) {
	         console.log(response.data);
	         
	       } 
		}.bind(this),function onError(response){
       this.dialog.sysAlert();
    }.bind(this));
  }
  getTasks(){
  	this.httpservice.postData("exportTask/querydone",{cacheType:"reportStat",
				startDate:this.startDate,
				endDate:this.endDate}).then(
  		function onSuccess(response) {
	       if (response.data.success) {
	          this.tasks = response.data.tasks;
	         
	       } 
		}.bind(this),function onError(response){
      this.dialog.sysAlert();
    }.bind(this));
  }
}
reportStatController.$inject = ['$interval','$timeout','httpService','utils','dialog'];