app.config(function ($stateProvider) {
    $stateProvider.state('auth-client', {
        url: '/android/auth-client',
        templateUrl: '/pre-build/auth-client/auth-client.html',
        controller: 'AuthClientController'
    });
});