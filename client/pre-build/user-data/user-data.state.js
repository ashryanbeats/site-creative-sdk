app.config(function ($stateProvider) {
    $stateProvider.state('user-data', {
        url: '/android/user-data',
        templateUrl: '/pre-build/user-data/user-data.html',
        controller: 'UserDataController'
    });
});