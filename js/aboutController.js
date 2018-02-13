(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    document.querySelectorAll('main > section').forEach(el => el.style.display = 'none');
    document.getElementById('about').style.display = 'block';
  };

  module.aboutController = aboutController;
})(window);
