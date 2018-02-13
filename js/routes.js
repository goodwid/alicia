(function(module) {
  var routes = {};

  routes.setRouteMappings = function() {
    page.base('/');

    page('/', homeController.index);
    page('about', aboutController.index);
    page('contact', contactController.index);

    page();
  };

  routes.setRouteMappings();

  module.routes = routes;

})(window);
