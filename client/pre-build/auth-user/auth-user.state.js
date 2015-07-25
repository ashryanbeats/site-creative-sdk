app.config(function ($stateProvider) {
    $stateProvider.state('auth-user', {
        url: '/android/auth-user',
        templateUrl: '/pre-build/auth-user/auth-user.html',
        controller: 'AuthUserController'
    });
});