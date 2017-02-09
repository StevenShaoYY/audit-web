import EventBus from 'angular-es-utils/event-bus';
export default class menuController {
  //构造函数中引入依赖,需加上aaaController.$inject = ['XXX'];
  constructor(httpService,utils) {
    this.httpservice = httpService;
    this.ut = utils;
    this.isIndex = false;
    this.expanders = [{
      title : '可疑行为分析',
      text : ['单人行为分析','人员匹配查询','开房同住查询统计','档案查询统计','单个受害人分析','受害人批量分析','请求服务信息系统业务分析']
    }, {
      title : '统计分析',
      text : ['业务部门查询者排名','查询者排名','被查询者排名','组织机构查询排名','模块查询者排名','模块查询统计','查询人数统计']
    }, {
      title : '查询申请',
      text : ['申请查询','结果反馈']
    },{
      title : '系统配置',
      text : ['应用列表']
    },
    {
      title : '系统日志',
      text : ['日志查询','使用量统计','数据同步异常']
    },{
      title : '权限控制',
      text : ['用户管理','角色管理','用户授权']
    }];
    this.init()
  }
  //controller中的方法
  _init(){

  }
  init(){
    const deregister = EventBus.on('isIndex', (t) => this.isIndex = t);
    console.log(this.isIndex);
  }
  hideLeftMenu(){
    this.isIndex = false;
  }
}
menuController.$inject = ['httpService','utils'];