//框架
import angular from 'angular';
// import ngRoute from 'angular-route';
import uirouter from 'angular-ui-router';
import jquery from 'jquery';
import ngMaterial from 'angular-material';
import 'angular-animate';
import 'angular-aria';
import {Inject} from 'angular-es-utils';
//module
import echartModule from "../directive/echartModule";
//directive
import accordion from "../directive/navDirective";
import expander1 from "../directive/nav2Directive";

//service
import httpService from "../services/httpService";
import utilsService from "../services/utils";
import routesConfig from "./routes";
//controller
import indexController from "../controller/indexController"
import menuController from "../controller/menuController"
import workManageController from "../controller/workManageController"
import headerController from "../controller/headerController"

//css
import 'normalize.css';
import '../style/app.css';
import 'angular-material/angular-material.css';
const MODULE_NAME = 'app';


angular.module(MODULE_NAME, ['ui.router','ngMaterial','echartModule'])
  .service('httpService',httpService)
  .service('utils',utilsService)
  .controller('indexController',indexController)
  .controller('menuController',menuController)
  .controller('workManageController',workManageController)
  .controller('headerController',headerController)
  .directive('accordion', () => new accordion())
  .directive('expander', () => new expander1())
  .config(routesConfig)

export default MODULE_NAME;
