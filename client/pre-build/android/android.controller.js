app.controller('AndroidController', function($scope, TutorialFactory, $sce) {
  
  $scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

  // TutorialFactory.getOneTutorial() // this method on the factory currently gets all, and is here as a placeholder.
  //   .then(function(tutorials) {
      
      // Examples
      // $scope.tutorial = tutorials.data;
      // $scope.title = $sce.trustAsHtml($scope.tutorial[1].title);
  //   });
});