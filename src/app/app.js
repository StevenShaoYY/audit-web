//框架
import angular from 'angular';
import ngRoute from 'angular-route';
import jquery from 'jquery';
import ngMaterial from 'angular-material';
import 'angular-animate';
import 'angular-aria';
//module
import echartModule from "../directive/echartModule";
//directive
import navderctive from "../directive/navDirective";
//service
import httpService from "../services/httpService";
import utilsService from "../services/utils";
import routesConfig from "./routes";
//controller
import indexController from "../controller/indexController"


//css
import 'normalize.css';
import '../style/app.css';
import 'angular-material/angular-material.css';
const MODULE_NAME = 'app';



angular.module(MODULE_NAME, ['ngRoute','ngMaterial','echartModule'])
  .service('httpService',httpService)
  .service('utils',utilsService)
  .controller('indexController',indexController)
  .directive('navigation', () => new navderctive())
  .config(routesConfig)

export default MODULE_NAME;
