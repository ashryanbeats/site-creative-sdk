app.config(function ($stateProvider) {
    $stateProvider.state('intro', {
        url: '/android/intro',
        templateUrl: '/pre-build/intro/intro.html',
        controller: 'IntroController'
    });
});