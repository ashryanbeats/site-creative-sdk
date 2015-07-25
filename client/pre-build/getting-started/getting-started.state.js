app.config(function ($stateProvider) {
    $stateProvider.state('getting-started', {
        url: '/android/getting-started',
        templateUrl: '/pre-build/getting-started/getting-started.html',
        controller: 'GettingStartedController'
    });
});