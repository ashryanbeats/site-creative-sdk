app.config(function ($stateProvider) {
    $stateProvider.state('photo-display', {
        url: '/android/photo-display',
        templateUrl: '/pre-build/photo-display/photo-display.html',
        controller: 'PhotoDisplayController'
    });
});