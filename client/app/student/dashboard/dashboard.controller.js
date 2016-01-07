'use strict';

angular.module('venueApp')
  .controller('DashboardCtrl', ($scope, $routeParams, User, Auth) => {

    $scope.user = {};
    $scope.courses = [];
    $scope.events = [];

    Auth.getCurrentUser(function(user){
      $scope.user = user;
      getCoursesEvents();
    });

    function getCoursesEvents(){
      User.getCourses({id:$scope.user._id})
      .$promise.then((courses) => {
        $scope.courses = courses;
      });

      User.getEvents({id:$scope.user._id})
      .$promise.then((events) => {
        $scope.events = events;
      });
    }


  });
