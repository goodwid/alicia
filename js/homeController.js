(function(module) {
  var homeController = {};

  homeController.index = function(ctx) {
    document.querySelectorAll('main > section').forEach(el => el.style.display = 'none');
    document.getElementById('home').style.display = 'block';

  };

  module.homeController = homeController;
})(window);
