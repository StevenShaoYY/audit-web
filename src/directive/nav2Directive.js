export default class expander{
	constructor () {
    	this.restrict = 'EA';
		this.replace = true;
		this.transclude = true;
		this.require = '^?accordion';
		this.scope = {
			title : '=expanderTitle'
		};
		this.template = '<div>'
				  + '<div class="title" ng-click="toggle()">{{title}}</div>'
				  + '<div class="body" ng-show="showMe" ng-transclude></div>'
				  + '</div>';
		
	}
	link(scope, element, attrs, accordionController){
		scope.showMe = false;
		accordionController.addExpander(scope);
		scope.toggle = function toggle() {
			scope.showMe = !scope.showMe;
			accordionController.gotOpened(scope);
		}
	}
}