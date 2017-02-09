//workManageController.js
import EventBus from 'angular-es-utils/event-bus';
export default class workManageController {
  constructor(httpService,utils) {
    this.httpservice = httpService;
    this.ut = utils;
    this.init()
  }
  //controller中的方法
  init(){
  	EventBus.dispatch('isIndex', true);
  }
}
workManageController.$inject = ['httpService','utils'];