app.controller('AndroidController', function($scope, TutorialFactory, $sce) {
  
  $scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

  TutorialFactory.getOneTutorial()
    .then(function(tutorials) {
      $scope.tutorial = tutorials.data;
      $scope.title = $sce.trustAsHtml($scope.tutorial[1].title);
    });
});