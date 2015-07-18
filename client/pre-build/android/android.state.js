app.config(function ($stateProvider) {
    $stateProvider.state('android', {
        url: '/android',
        templateUrl: '/pre-build/android/android.html'
        //controller: 'AndroidController'
    });
});