define(['quan','jquery'],function(Q,$){
	var Tab = function(tabBarSelector,tabContentContainerSelector,tabContainerSelector){
		this.tabBarSelector = tabBarSelector||"";
		this.tabContentContainerSelector = tabContentContainerSelector ||"";
		this.tabContainerSelector = tabContainerSelector||"";
		this.tabBarSelector = window.globalNamSpace.getSelector(tabBarSelector);
		this.tabContentContainer = window.globalNamSpace.getSelector(tabContentContainerSelector);
		this.tabContainer = window.globalNamSpace.getSelector(tabContainerSelector);
		
		this.width = 0;
		
		var me = this;
		
		this.setSelectButton = function(){
			if(tabBarSelector)
				this.selectButton = this.tabBarSelector.children('a');
			return this;
		};
		
		this.setWidth = function(width){
			this.width = width ||window.innerWidth;
		};
		
		this.tabBarClick = function(){
			var index = $(this).index();
			//removeElementCollectionClass($(this).siblings(),);
			$(this).siblings().removeClass("selected");
			$(this).addClass("selected");
			$(me.tabContentContainerSelector).css("-webkit-transform" , "translate("+(-index*me.width)+"px)");
		};
		
		var removeElementCollectionClass = function(elementCollections,className){
			for(var i=0,len = elementCollections.length;i<len;i++){
				$(elementCollections[i]).removeClass(className);
			};
		};
		
		this.init = function(){
			this.checkParameter().tabContainerInit().tabContentContainerInit().setSelectButton();
			$(document).on("click",tabBarSelector +" a",this.tabBarClick);
		};
		
		this.checkParameter = function(){
			if(!this.tabBarSelector){
				throw new Error("plz set availibale tabBarSelector");
			}
			if(!this.tabContentContainer){
				throw new Error("plz set availibale tabContentContainer");
			}
			if(!this.tabContainer){
				throw new Error("plz set availibale tabContentContainer");
			}
			return this;
		};
		this.tabContainerInit = function(){
			this.tabContainer.css("overflowX","hidden");
			return this;
		};
		
		this.tabContentContainerInit = function(){
			if(!this.width){
				this.width = window.innerWidth;
			}
			if(this.tabContentContainer){
				this.tabLists = this.tabContentContainer.children("li");
				var maxHeight = 0;
				var widthSum = 	this.tabLists.length * this.width;			
				for(var i =0 , len = this.tabLists.length; i<len;i++){
					this.tabLists[i].style.width = this.width + 'px';
					this.tabLists[i].style.left = i * this.width;
				};
				this.tabContentContainer.width(widthSum);
			}
			return this;
		};
	};
	var ExploreController = function(){
		Q.BaseViewController.call(this);
		this.name = 'wujiangquan';
		
		this.getName = function(){
			return this.name;
		};
		
		this.showIdName = function(){
			alert(this.id);
		};
		
		this.init = function(){
			$(document).on("click","#todoContainer",this.showIdName);
			
		};
		
		this.getPageInitData = function(){
			return {
				name:'吴江权'
			};
		};
		
		this.pageInit = function(){
			this.initShareGoddess().initShareBrother().initShareFaned();
			var tab = new Tab(".exploreType",".exploreListContainer",".exploreContainer");
			tab.init();
			this.init();
		};
		
		this.initShareGoddess = function(){
			Q.component.use('feedTimeLine','.exploreListContainer .shareGoddess',{recomends:[{name:'wujiangquan'},{name:'sunzhongshan'},{name:'maozedong'}]});
			return this;
		};
		
		this.initShareBrother = function(){
			Q.component.use('feedTimeLine','.exploreListContainer .shareBrother',{recomends:[{name:'a'},{name:'sunzhongshan'},{name:'maozedong'}]});
			return this;
		};
		
		this.initShareFaned = function(){
			Q.component.use('feedTimeLine','.exploreListContainer .shareFaned',{recomends:[{name:'b'},{name:'sunzhongshan'},{name:'maozedong'}]});
			return this;
		};
		
		this.checkAbstract(this);
	};
	ExploreController.prototype = new Q.BaseViewController();
	return new ExploreController();
});


