import index from "../views/index.html"
import work_manage from "../views/work_manage.html"
import nav from "../views/nav.html"
import header from "../views/header.html"
import header2 from "../views/header2.html"
import footer from "../views/footer.html"
import operatored_search from "../views/operatored_search.html"
import report_stat from "../views/report_stat.html"

import indexController from "../controller/indexController"
import workManageController from "../controller/indexController"
import menuController from "../controller/menuController"
import headerController from "../controller/headerController"
import operatoredSearchController from "../controller/operatoredSearchController"
import reportStatController from "../controller/reportStatController"

function config($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('index',{
      url:"/",
      views: {
        "header": {
             template:header,
             controller:'headerController',
             controllerAs:'header'
        },
        "nav": {
            // template:nav,
            // controller:'menuController',
            // controllerAs:'mu'
        },
        "main": {
            template:index,
            controller:'indexController',
            controllerAs:'indexc'
        },
        "footer": {
            template:footer,
        }
      }
      
    })
    .state('operatored_search',{
      url:"/operatored_search",
      views: {
        "header": {
             template:header2,
             controller:'headerController',
             controllerAs:'header'
        },
        "nav": {
            template:nav,
            controller:'menuController',
            controllerAs:'mu'
        },
        "main": {
            template:operatored_search,
            controller:"operatoredSearchController",
            controllerAs:'os'
        }
      }
      
    })
    .state('work_manage',{
      url:"/work_manage",
      views: {
        "header": {
             template:header2,
             controller:'headerController',
             controllerAs:'header'
        },
        "nav": {
            template:nav,
            controller:'menuController',
            controllerAs:'mu'
        },
        "main": {
            template:work_manage,
            controller:"workManageController",
            controllerAs:'wc'
        }
      }
      
    })
    .state('report_stat',{
      url:"/report_stat",
      views: {
        "header": {
             template:header2,
             controller:'headerController',
             controllerAs:'header'
        },
        "nav": {
            template:nav,
            controller:'menuController',
            controllerAs:'mu'
        },
        "main": {
            template:report_stat,
            controller:"reportStatController",
            controllerAs:'rc'
        }
      }
      
    })
    //$locationProvider.html5Mode(true);
}

config.$inject = ['$stateProvider','$urlRouterProvider'];
export default config;