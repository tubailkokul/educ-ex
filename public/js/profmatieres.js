var app = angular.module('myApp', []);
app.controller('ProfsCtrl', function($scope, $http) {
  $http.get("profmatieres.json").then(function (response) {
      $scope.myData = response.data;
  });
});
app.controller("myCtrl", function($scope) {
    $scope.products = ["Controller les exams", "Lire les devoirs de classe 6"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    } ;
});
