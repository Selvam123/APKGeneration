/**
 *
 * @author Geppetto Generated Code</br>
 * Date Created: </br>
 * @since  </br>
 build:   </p>
 *
 * code was generated by the Geppetto System </br>
 * Geppetto system Copyright - NewPortBay LLC </br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
 * modified: Henrikh Kantuni
 */


'use strict';

angular.module('Social', ['ionic']);
var app = angular.module('SloanApp',
    [
        'Social',
        'openfb'
    ]
)

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        // setup an abstract state for the tabs directive

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/views/menu.html'
        })

        .state('home', {
            url: '/home',
            controller: 'Authentication',
            templateUrl: 'app/views/home/home.html'
        })

        .state('auth', {
            url: '/auth',
            controller: 'Authentication',
            templateUrl: 'app/views/en-US/user/auth.html'
        })

        .state('organization', {
            url: '/organization',
            controller: 'Authentication',
            templateUrl: 'app/views/en-US/user/organization.html'
        })

        .state('purpose', {
            url: '/purpose',
            controller: 'Authentication',
            templateUrl: 'app/views/en-US/user/purpose.html'
        })

        .state('customer', {
            url: '/customer',
            controller: 'Authentication',
            templateUrl: 'app/views/en-US/user/customer.html'
        })

        .state('caregiver', {
            url: '/caregiver',
            controller: 'Authentication',
            templateUrl: 'app/views/en-US/user/caregiver.html'
        })

        .state('info', {
            url: '/info',
            controller: 'Authentication',
            templateUrl: 'app/views/en-US/user/info.html'
        })

        .state('profile', {
            url: '/profile',
            controller: 'ProfileController',
            templateUrl: 'app/views/en-US/user/profile.html'
        })




        .state('app.First_time_setup-en', {
            url: '/First_time_setup-en',
            views: {
                'menuContent': {
                    templateUrl: 'app/views/en/First_time_setup-en.html',
                    controller: 'First_time_setup'
                }
            }
        })

        .state('app.Ft_set_up_org_selection-en', {
            url: '/Ft_set_up_org_selection-en',
            views: {
                'menuContent': {
                    templateUrl: 'app/views/en/Ft_set_up_org_selection-en.html',
                    controller: 'Landing_page'
                }
            }
        });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');

})

.run(function ($ionicPlatform, OpenFB,$rootScope) {
	$rootScope.env = "DEV";
    OpenFB.init('1008436239221044');
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});