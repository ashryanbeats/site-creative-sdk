app.config(function ($stateProvider) {
    $stateProvider.state('asset-browser', {
        url: '/android/asset-browser',
        templateUrl: '/pre-build/asset-browser/asset-browser.html',
        controller: 'AssetBrowserController'
    });
});