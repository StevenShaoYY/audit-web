//dialogService.js


export default class dialogService{
	constructor($mdDialog){
		this.mdDialog = $mdDialog;
	}
	// 错误提示框
	sysAlert() {
	   	this.mdDialog.show(
		    this.mdDialog.alert()
		        .parent(angular.element(document.querySelector('#popupContainer')))
		        .clickOutsideToClose(true)
		        .title('系统提示')
		        .textContent('服务器异常或登录过期！')
		        .ariaLabel('Alert Dialog Demo')
		        .ok('确定')
	    );
  	};
  	messageAlert(message) {
	   	this.mdDialog.show(
		    this.mdDialog.alert()
		       
		        .title('系统提示')
		        .textContent(message)
		        .ariaLabel('Alert Dialog Demo')
		        .ok('确定')
	    );
  };

}

dialogService.$inject = ['$mdDialog'];