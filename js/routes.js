/* globals: page */

(function(module) {
  var routes = {};
  var controllers = {};
  controllers.selectDisplay = (element) => {
    document.querySelectorAll('main > section').forEach(el => el.style.display = 'none');
    document.getElementById(element).style.display = 'block';
  };
  controllers.about = () => {
    controllers.selectDisplay('about');
  };
  controllers.contact = () => {
    controllers.selectDisplay('contact');
  };
  controllers.home = () => {
    controllers.selectDisplay('home');
  };
  controllers.location = () => {
    controllers.selectDisplay('location');
  };


  routes.setRouteMappings = function() {
    page.base('/');

    page('/', controllers.home);
    page('about', controllers.about);
    page('contact', controllers.contact);
    page('location', controllers.location);

    page();
  };

  routes.setRouteMappings();

  module.routes = routes;

})(window);
