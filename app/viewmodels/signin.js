define(function(require) {
  var dialog = require("plugins/dialog");

  var vm_signin = function() {
    var self = this;

    self.title = "MyTitle";
    self.login = "";
    self.pass = "";

    self.signIn = function() {
      var dialogResult = true;
      dialog.close(self, dialogResult);
    };
  };
  
  return vm_signin;
});
