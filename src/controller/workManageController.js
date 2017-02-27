//workManageController.js
import EventBus from 'angular-es-utils/event-bus';
export default class workManageController {
  constructor($timeout,httpService,utils,dialog) {
    this.httpservice = httpService;
    this.ut = utils;
    this.dialog = dialog;
    this.init();
    this.wkState = '';
    this.wkStates = ['未开始','执行中','已完成','已废弃'];
    this.freshTime = '';
    this.freshTimes = ['5秒','10秒','30秒','1分钟','2分钟','5分钟','10分钟'];
    this.startDate="";
    this.endDate="";
    this.pageSize = 10;
    this.curPage = 1;
    this.data = [];
    this.totalPages=0;
   // this.searchData();
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
  }
  //controller中的方法
  init(){
  	EventBus.dispatch('isIndex', true);
  }
  clickSearchData(){
  	this.curPage=1;
  	this.searchData();
  }
  searchData(){
  	let aoData={
  		pageSize:this.pageSize,
		pageNum:this.curPage,
		status:this.wkState,
		startDate: this.startDate,
		endDate:this.endDate,
		moduleCode:'exportTask'
  	}
  	return this.httpservice.postData("exportTask/query",aoData).then(
  		function onSuccess(response) {
       		if (response.data.success) {
       			let dataCopy=response.data.data;
       			for(let i = 0; i < dataCopy.length; i++){
					var tempData = dataCopy[i];
					if(tempData.success==0){
						tempData.successName = '失败';
					}
					if(tempData.success==1){
						tempData.successName = '成功';
					}
					if(tempData.cacheType=='leastRateStat'){
						tempData.typeName = '使用较少同意条件分析';
					}
					if(tempData.cacheType=='singleRateStat'){
						tempData.typeName = '单人同意条件分析';
					}
					if(tempData.cacheType=='deedAnalyse'){
						tempData.typeName = '单人行为分析';
					}
					if(tempData.cacheType=='opeLogArchiveStat'){
						tempData.typeName = '档案查询统计';
					}
					if(tempData.cacheType=='opeLogSearchStatistic'){
						tempData.typeName = '开房同住查询统计';
					}
					if(tempData.cacheType=='singleVictimAnalysis'){
						tempData.typeName = '单个受害人分析';
					}
					if(tempData.cacheType=='caseAnalysis'){
						tempData.typeName = '受害人批量分析';
					}
					if(tempData.cacheType=='opeLogSearchRank'){
						tempData.typeName = '查询者排名';
					}
					if(tempData.cacheType=='opeLogUserOpeStat'){
						tempData.typeName = '模块查询统计';
					}
					if(tempData.cacheType=='opeLogSearchedRank'){
						tempData.typeName = '被查询者排名';
					}
					if(tempData.cacheType=='opeLogSearchRankByOrg'){
						tempData.typeName = '组织机构查询排名';
					}
					if(tempData.cacheType=='opeLogOperaterRank'){
						tempData.typeName = '模块查询者排名';
					}
					if(tempData.cacheType=='opeLogSearchNumRank'){
						tempData.typeName = '查询人数统计';
					}
					if(tempData.cacheType=='reportStat'){
						tempData.typeName = '上报统计';
					}
					if(tempData.cacheType=='searchRankByWorkOrg'){
						tempData.typeName = '业务部门查询者排名';
					}
					if(tempData.cacheType=='personInfo'){
						tempData.typeName = '公安网警员审计档案';
					}
					if(tempData.cacheType=='terminalIdInfo'){
						tempData.typeName = '公安网IP地址审计档案';
					}
				}
				this.data=dataCopy;
          		this.totalPages = response.data.pageCount;
          		this.paginationConf.totalItems = response.data.pageCount*this.pageSize;
          	}
		}.bind(this),function onError(response){
      this.dialog.sysAlert();
    }.bind(this));
  }
  changePage(curPage,pageSize){
  	this.curPage = curPage
	this.pageSize = pageSize;
	this.searchData();
  }
}
workManageController.$inject = ['$timeout','httpService','utils','dialog'];