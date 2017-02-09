export default class accordion{
	constructor () {
    	this.restrict = 'EA';
		this.replace = true;
		this.transclude = true;
		this.template = '<div ng-transclude></div>';
		this.controller = function() {
			var expanders = [];
			this.gotOpened = function(selectedExpander) {
				angular.forEach(expanders, function(expander) {
					if (selectedExpander != expander) {
						expander.showMe = false;
					}
				});
			}
			this.addExpander = function(expander) {
				expanders.push(expander);
			}
		}
	}
}
