app.config(function ($stateProvider) {
    $stateProvider.state('photo-metadata-display', {
        url: '/android/photo-metadata-display',
        templateUrl: '/pre-build/photo-metadata-display/photo-metadata-display.html',
        controller: 'PhotoMetadataDisplayController'
    });
});