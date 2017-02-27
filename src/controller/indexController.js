import EventBus from 'angular-es-utils/event-bus';

export default class pageAController {
  //构造函数中引入依赖,需加上aaaController.$inject = ['XXX'];
  constructor($timeout,httpService,utils,dialog) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.httpservice = httpService;
    this.ut = utils;
    this.timeout = $timeout;
    this.dialog = dialog;
    this.indexPara={};
    this.init();

    this.lineConfig = {
            theme:'default',
            dataLoaded:true
        };
    this.lineOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
        },
        xAxis : [
            {
                data : ['旅馆','机动车','常口','暂扣','驾驶人'],
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                }
            }
        ],
        yAxis : {
           show: false
        },
        series :[
        {
          name:'IP访问量',
          type:'bar',
          barWidth : 30,//柱图宽度
          data:[1200000,1180000,1160000,1140000,1120000],
          itemStyle: {
                normal: {
                    barBorderRadius:[3, 3, 0, 0],
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#32b16c','#b6c335','#7c50be','#e87c24','#61c0de',
                        ];
                        return colorList[params.dataIndex]
                    },
　　　　　　　  label: {
                      show: true,
                      position: 'top',
                      formatter: '{c}'
                    }
                }
            },
        }]
    };
    //this._init();
  }
  //controller中的方法
  _init(){
    for(let a =0;a<=3;a++){
        let temp = 145-document.getElementsByClassName('index-header-tab-right')[a].childNodes[1].offsetWidth*0.5;
        document.getElementsByClassName('index-header-tab-right')[a].childNodes[1].style.cssText ="left:"+temp+"px";
    }
  }
  init(){
    this.httpservice.getData("operatelog/countinfo").then(
  		function onSuccess(response) {
       if (response.data.success) {
          this.indexPara.reg_count = response.data.data.reg_count;
          this.indexPara.total_count = response.data.data.total_count;
         
       } 
		}.bind(this),function onError(response){
      this.dialog.sysAlert();
    }.bind(this));
    this.httpservice.getData("operatelog/todaycountinfo").then(
      function onSuccess(response) {
       if (response.data.success) {
         this.indexPara.new_count = response.data.data.new_count; 
       } 
    }.bind(this),function onError(response){
       this.dialog.sysAlert();
    }.bind(this));
    this.httpservice.getData("sys/operatelog/current/used").then(
      function onSuccess(response) {
        if (response.data.success) {
          this.indexPara.data = response.data.data;
          this.timeout(function() {
              this._init();
            }.bind(this), 1);
      } 
    }.bind(this),function onError(response){
       this.dialog.sysAlert();
    }.bind(this));
  }
  showLeftMenu(){
    EventBus.dispatch('isIndex', true);
  }
  hideLeftMenu(){
    EventBus.dispatch('isIndex', false);
  }
}
pageAController.$inject = ['$timeout','httpService','utils','dialog'];