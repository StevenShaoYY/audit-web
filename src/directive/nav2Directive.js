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
		+ '<a class="title-a" ng-click="toggle()" href=""><div class="title">{{title}}</div></a>'
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