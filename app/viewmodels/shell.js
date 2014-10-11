define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', icon: 'glyphicon glyphicon-home', title:'Startpage', moduleId: 'viewmodels/start', nav: true },
                { route: 'home(/:showModal)', icon: 'glyphicon glyphicon-home', title:'Home', moduleId: 'viewmodels/home', nav: false }
            ]).buildNavigationModel();

            return router.activate();
        },
        displayNavItem: function(item) {
          return "<i class='" + item.icon + "'> </i> " + item.title;
        }
    };
});
