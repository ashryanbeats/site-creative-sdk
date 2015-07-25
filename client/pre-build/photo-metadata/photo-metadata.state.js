app.config(function ($stateProvider) {
    $stateProvider.state('photo-metadata', {
        url: '/android/photo-metadata',
        templateUrl: '/pre-build/photo-metadata/photo-metadata.html',
        controller: 'PhotoMetadataController'
    });
});