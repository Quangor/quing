define(["quan"],function(Q){
	var MessageNotificationController = function MessageNotificationController(){
		Q.BaseViewController.call(this);
		this.init = function(){
		};
		
		this.getPageInitData = function(){
			return {
				name:'wujiangquan'
			};
		};
		
		this.pageInit = function(){
			
		};
		this.checkAbstract(this);
	};
	MessageNotificationController.prototype = new Q.BaseViewController();
	return new MessageNotificationController();
});
