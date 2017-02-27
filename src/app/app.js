//框架
import angular from 'angular';
import uirouter from 'angular-ui-router';

import ngMaterial from 'angular-material';
import 'angular-animate';
import 'angular-aria';
import {Inject} from 'angular-es-utils';
//module
import echartModule from "../directive/echartModule";
//directive
import accordion from "../directive/navDirective";
import expander1 from "../directive/nav2Directive";
import pagination from "../directive/paginationDirective"

//service
import httpService from "../services/httpService";
import dialogService from "../services/dialogService";
import utilsService from "../services/utils";
import routesConfig from "./routes";
import dateConfig from "./dateConfig";
//controller
import indexController from "../controller/indexController"
import menuController from "../controller/menuController"
import workManageController from "../controller/workManageController"
import headerController from "../controller/headerController"
import operatoredSearchController from "../controller/operatoredSearchController"
import reportStatController from "../controller/reportStatController"

//css
import 'normalize.css';
import '../style/app.css';
import 'angular-material/angular-material.css';
//import 'ng-table/bundles/ng-table.css';
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import jQuery from 'jquery';
const MODULE_NAME = 'app';


angular.module(MODULE_NAME, ['ui.router','ngMaterial','echartModule'])
  .service('httpService',httpService)
  .service('dialog',dialogService)
  .service('utils',utilsService)
  .controller('indexController',indexController)
  .controller('menuController',menuController)
  .controller('workManageController',workManageController)
  .controller('headerController',headerController)
  .controller('operatoredSearchController',operatoredSearchController)
  .controller('reportStatController',reportStatController)
  .directive('accordion', () => new accordion())
  .directive('expander', () => new expander1())
  .directive('pagination', () => new pagination())
  .config(routesConfig)
  .config(dateConfig)

export default MODULE_NAME;
