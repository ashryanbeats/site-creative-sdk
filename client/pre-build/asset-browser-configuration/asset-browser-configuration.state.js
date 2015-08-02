app.config(function ($stateProvider) {
    $stateProvider.state('asset-browser-configuration', {
        url: '/android/asset-browser-configuration',
        templateUrl: '/pre-build/asset-browser-configuration/asset-browser-configuration.html',
        controller: 'AssetBrowserConfigurationController'
    });
});