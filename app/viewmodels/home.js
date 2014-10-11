define(function(require) {

  var app = require("durandal/app"),
      dialog = require('plugins/dialog');


  var vm_home = function() {
    //Your code
  };

  vm_home.prototype.activate = function(showModal) {

    if(showModal !== undefined &&
       showModal === 'true') {
      console.log(showModal);
      dialog.show('viewmodels/signin');
    }
  };

  return vm_home;
});
