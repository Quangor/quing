define(['quan'],function(Q){
	var RecomendContainerViewController = function RecomendContainerViewController(){
		Q.BaseViewController.call(this);
		this.getPageInitData = function(){
			return {
				name:'吴江权'
			};
		};
		
		this.pageInit = function(){
		
		};
		this.checkAbstract(this);
	};
	RecomendContainerViewController.prototype = new Q.BaseViewController();
	return new RecomendContainerViewController();
});
