(function(module) {
  var contactController = {};

  contactController.index = function() {
    document.querySelectorAll('main > section').forEach(el => el.style.display = 'none');
    document.getElementById('contact').style.display = 'block';
  };

  module.contactController = contactController;
})(window);
