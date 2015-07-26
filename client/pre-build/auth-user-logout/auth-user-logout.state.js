app.config(function ($stateProvider) {
    $stateProvider.state('auth-user-logout', {
        url: '/android/auth-user-logout',
        templateUrl: '/pre-build/auth-user-logout/auth-user-logout.html',
        controller: 'AuthUserLogoutController'
    });
});