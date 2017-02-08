

export default class pageAController {
  //构造函数中引入依赖,需加上aaaController.$inject = ['XXX'];
  constructor(httpService,utils) {
    this.url = 'https://github.com/preboot/angular-webpack';
    this.httpservice = httpService;
    this.ut = utils;
    this._init();
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
  }
  //controller中的方法
  _init(){
    for(let a =0;a<=3;a++){
        document.getElementsByClassName('index-header-tab-right')[a].childNodes[1].style.cssText ="left:"+(145-document.getElementsByClassName('index-header-tab-right')[a].childNodes[1].offsetWidth*1.5)+"px";
    }
  }
  init(){
  	//alert(this.ut.leapYear(2001));
  	let aaa={'pageSize': 18, 'pageNum': 1, 'topicCode': "t_12"};
  	return this.httpservice.postData("/stweb-cms/actions/secured/query/topicArticle",aaa).then(
  		function onSuccess(response) {

			if (response.data.success) {} 
		},function onError(response){
      console.log(this);
    }.bind(this));
  }
}
pageAController.$inject = ['httpService','utils'];