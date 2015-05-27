// Modal popup configuration
appModule.config(function ($modalProvider) {
    angular.extend($modalProvider.defaults, {
        html: true
    });
});

appModule.config([
    'localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('providerPortal');
        // never expires
        // falls back to cookie
        localStorageServiceProvider.setStorageType('localStorage');
    }
]);
appModule.config(['$logProvider', function ($logProvider) {
    // turn debugging off/on (no info or warn)
    if ($logProvider.debugEnabled) {
        $logProvider.debugEnabled(true);
    }
}]);
appModule.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', { controller: HomeCtrl, templateUrl: "/Home/Index" }).
            when('/Home/Index', { controller: HomeCtrl, templateUrl: "/Home/Index", title: 'Home' }).
            when('/Profile/ProviderInfo', { controller: ProviderDetailsCtrl, templateUrl: "/Profile/ProviderInfo", title: 'My Profile' }).
            when('/Activities/ProviderActivities', { controller: ActivitiesCtrl, templateUrl: "/Activities/ProviderActivities", title: 'My Activities' }).
            when('/Activities/ContinueCare', { controller: ActivitiesCtrl, templateUrl: "/Activities/ContinueCare", title: 'Continue Care' }).
            when('/Activities/CloseActivity', { controller: ActivitiesCtrl, templateUrl: "/Activities/CloseActivity", title: 'Assessments / Facesheet' }).
            when('/Invoice/Index', { controller: TabsHome, templateUrl: "/Invoice/Index", title: 'WLS Invoices' }).
            when('/Schedule/ProviderSchedule', { controller: ScheduleCtrl, templateUrl: "/Schedule/ProviderSchedule", title: 'My Schedule' })
            .otherwise({
                redirectTo: '/'
            });
    }
]);

appModule.config(function ($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'dd-MM-yyyy',
        startWeek: 1
    });
})
