import index from "../views/index.html"
import indexController from "../controller/indexController"

function config($routeProvider,$locationProvider){
  $routeProvider
    .when('/',{
       template:index,
       controller:'indexController',
       controllerAs:'indexc'
    })
    .when('/index',{
      template:index,
      controller:"indexController",
      controllerAs:'indexc'
    })
    .otherwise({
    	redirectTo:'/index'}
    );
    //$locationProvider.html5Mode(true);
}

config.$inject = ['$routeProvider','$locationProvider'];
export default config;