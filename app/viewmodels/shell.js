define(['plugins/router', 'durandal/app', 'knockout', 'plugins/dialog'], function (router, app, ko, dialog) {
  return {
    router: router,
    activate: function () {

      router.map([
        { route: '', icon: 'glyphicon glyphicon-home', title: 'Startpage', moduleId: 'viewmodels/start', nav: true },
        { route: 'home(/:showModal)', icon: 'glyphicon glyphicon-home', title: 'Home', moduleId: 'viewmodels/home', nav: false },
        { route: 'about(/:showModal)', icon: 'glyphicon glyphicon-home', title: 'About', moduleId: 'viewmodels/about', nav: false }
      ]).buildNavigationModel();

      router.on('router:navigation:complete').then(function (instance, instruction, router) {
        console.log(instruction);
        if (
          instruction.fragment !== '' &&
          instruction.fragment.indexOf('signInModal') >= 0) {
          dialog.show('viewmodels/signin');
        }
      });

      router.mapUnknownRoutes(function(instruction) {
        if (instruction.fragment !== '' &&
            instruction.fragment.indexOf('signin') >= 0) {
          console.log(instruction);
          instruction.config.moduleId = router.activeInstruction() !== null ? router.activeInstruction().config.moduleId : 'viewmodels/home';
          dialog.show('viewmodels/signin');
        }
      });

      return router.activate();
    },
    displayNavItem: function (item) {
      return "<i class='" + item.icon + "'> </i> " + item.title;
    }
  };
});
