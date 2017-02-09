//headerController.js
import EventBus from 'angular-es-utils/event-bus';
export default class headerController {
  constructor(httpService,utils) {
    this.httpservice = httpService;
    this.ut = utils;
    this.init()
  }
  //controller中的方法
  init(){
  }
}
headerController.$inject = ['httpService','utils'];