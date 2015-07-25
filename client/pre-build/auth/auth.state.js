app.config(function ($stateProvider) {
    $stateProvider.state('auth', {
        url: '/android/auth',
        templateUrl: '/pre-build/auth/auth.html',
        controller: 'AuthController'
    });
});