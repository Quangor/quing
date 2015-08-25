// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery","underscore","quan"], function($,_,Q) {
	var moduleContainer = "#viewContainer";
	Q.configRout({
		"explore":{
			viewController:'viewContollers/explore/ExploreController',
			templateUrl:'app/views/explore/ExploreTemplate.html',
			templateCache : true,
			saveScene:true,
			container:moduleContainer
		},
		"message":{
			viewController:'viewContollers/message/MessageNotificationController',
			templateUrl:'app/views/message/MessageNotification.html',
			templateCache : true,
			saveScene:true,
			container:moduleContainer
		},
		"default":"explore"
	});
	Q.component.config([
		{
				name:'feedTimeLine',
				templateUrl:'app/components/recomendContainer/RecomendContainerTemplateUrl.html',
				controllerUrl:'app/components/recomendContainer/RecomendContainerViewController.js'
		}
	]);
});
