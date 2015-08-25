require.config({
  paths: {
    "components": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery",
    "underscore":"../bower_components/underscore/underscore",
    "quan":"../bower_components/quan/Quan"
  }
});



if (!window.requireTestMode) {
  	require(['main']);
}