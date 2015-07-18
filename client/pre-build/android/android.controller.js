app.controller('AndroidController', function($scope, TutorialFactory) {
  
  $scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

  $scope.tutorial = TutorialFactory.getOneTutorial();
});