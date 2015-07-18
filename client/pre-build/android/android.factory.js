app.factory('TutorialFactory', function($http) {
  return {
    getOneTutorial: function() {
      return $http.get("/api/tutorial/");
    }
  };
});