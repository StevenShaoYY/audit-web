//operatoredSearchController.js

import EventBus from 'angular-es-utils/event-bus';
import digTpl from '../views/documentSearchApplyTable.html';


export default class operatoredSearchController {
  //构造函数中引入依赖,需加上aaaController.$inject = ['XXX'];
  constructor($timeout,httpService,$mdDialog,utils,dialog) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.httpservice = httpService;
    this.ut = utils;
    this.mdDialog = $mdDialog;
    this.timeout = $timeout;
    this.dialog = dialog;
    this.indexPara={};
    this.startDate="";
    this.endDate="";
    this.searchOption=[
      {'id':1,'searchName':'身份证号码'},
      {'id':2,'searchName':'姓名'},
      {'id':3,'searchName':'警号'}
    ]
    this.applyState=[
      {'id':1,'applyStateName':'已申请'},
      {'id':2,'applyStateName':'已反馈'},
    ]
    this.applyStateResult="";
    this.searchResult="身份证号码";
    this.xiansuoFrom ={'a':{'status':false,name:'报警'},
      'b':{'status':false,name:'信访'},
      'c':{'status':false,name:'督查'},
      'd':{'status':false,name:'纪委'},
      'e':{'status':false,name:'互联网'},
      'f':{'status':false,name:''}
    };
    this.applyData={'clueResource':""};
    this.others="";
    this.pageSize = 10;
    this.curPage = 1;
    this.totalPages=0;
    this.paginationConf={
        currentPage: this.curPage,
        totalItems: this.totalPages*this.pageSize,
        itemsPerPage: this.pageSize,
        pagesLength: this.pageSize,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){
            this.changePage(this.paginationConf.currentPage,this.paginationConf.itemsPerPage)
        }.bind(this)
    }
    this.applyId="";
    this.searchReturnData={};
    this.validateXiansuoFrom="";
    this.replayTableContent = ""
    this.replySaveId=0;
  }
  //controller中的方法
  saveApplyTable(){
    for(let temp in this.xiansuoFrom){
      if(this.xiansuoFrom[temp].status ==true){
        if(temp=='f'){
          this.applyData.clueResource += this.others+',';
        }else{
          this.applyData.clueResource += this.xiansuoFrom[temp].name+",";
        }
      }
    }
    if(this.applyData.clueResource[this.applyData.clueResource.length-1]==','){
         this.applyData.clueResource = this.applyData.clueResource.slice(0,this.applyData.clueResource.length-1);
    }
    if(this.applyData.APPLY_DEPART_NAME==null||this.applyData.APPLY_DEPART_NAME==""){
      return 0;
    }
    if(this.applyData.APPLY_CONTACT_NAME==null||this.applyData.APPLY_CONTACT_NAME==""){
      return 0;
    }
    if(this.applyData.APPLY_CONTACT_TEL==null||this.applyData.APPLY_CONTACT_TEL==""){
      return 0;
    }
    if(this.applyData.clueResource ==""){
        this.validateXiansuoFrom = "请至少选择一个线索来源";
        return 0;
    }
    if(this.applyData.SELECT_REASON==null||this.applyData.SELECT_REASON==""){
      return 0;
    }
    if(this.applyData.APPLY_DEPART_NAME==null||this.applyData.APPLY_DEPART_NAME==""){
      return 0;
    }
   
    
    console.log(this.applyData);
  }

  showDialog(ev){
    this.mdDialog.show({
      controller: operatoredSearchController,
      controllerAs:'os',
      template: digTpl,
      multiple:true,
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
    })
  }
  cancel(){
    this.mdDialog.cancel();
  }
  searchClick(){
    this.curPage=1;
    this.getDatas()
  }
  getDatas(){
    let aoData={
        pageSize:this.pageSize,
        pageNum:this.curPage,
        status:this.applyStateResult,
        applyId:this.applyId,
        startDate:this.startDate,
        endDate:this.endDate
      };
    return this.httpservice.postData("audit/apply/query",aoData).then(
      function onSuccess(response) {
          if (response.data.success) {
              this.searchReturnData = response.data.data;
              this.totalPages = response.data.count/this.pageSize;
              this.paginationConf.totalItems = response.data.count;
          }
    }.bind(this),function onError(response){
      this.dialog.sysAlert();
    }.bind(this));
  }
  getDatasByApplyId(applyId){
    let aoData={
        pageSize:1,
        pageNum:1,
       // status:this.applyStateResult,
        applyId:applyId,
       // startDate:this.startDate,
        //endDate:this.endDate
      };
    return this.httpservice.postData("audit/apply/query",aoData)
  }
  watchByApplyId(applyId){
    this.getDatasByApplyId(applyId).then(
      function onSuccess(response) {
          if (response.data.success) {
              this.watchByApplyIdData = response.data.data[0];
              console.log( this.watchByApplyIdData.APPLY_DEPART_NAME);
              this.mdDialog.show({
                contentElement: '#myDialog',
                parent: angular.element(document.body),
                clickOutsideToClose:false,
                fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
              })
             
          }
    }.bind(this),function onError(response){
      this.dialog.sysAlert();
    }.bind(this));
  }
  changePage(curPage,pageSize){
      this.curPage = curPage
      this.pageSize = pageSize;
      this.getDatas();
  }
  reply(applyId,ev){
    this.replySaveId=applyId;
    this.mdDialog.show({
      contentElement: '#reply',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:false,
      fullscreen: this.customFullscreen // Only for -xs, -sm breakpoints.
    })
  }
  saveReplayTable(){
    if(this.replayTableContent==null||this.replayTableContent==""){
      return 0;
    }
    this.httpservice.postData("audit/apply/query/resultFeedback",{applyId : this.replySaveId ,resultFeedback: this.replayTableContent}).then(
      function onSuccess(response) {
          if (response.data.success) {
              this.replySaveId=0;
              this.dialog.messageAlert("保存成功！");
              this.getDatas();
          }
    }.bind(this),function onError(response){
      this.dialog.sysAlert();
    }.bind(this));
  }
}
operatoredSearchController.$inject = ['$timeout','httpService','$mdDialog','utils','dialog'];