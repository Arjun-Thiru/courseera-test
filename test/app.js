(function() {
  'use strict';
  angular.module('app', [])
    .controller('control', function($scope) {
      $scope.name = "";
      $scope.totalvalue = 0;
      $scope.caltotal  = function(){
        var t = caltotalvalue($scope.name);
        $scope.totalvalue = t;
      };

      
    function caltotalvalue(string){
      var total=0;
      for(var i=0;i<string.length;i++){
        total += string.charCodeAt(i);
      }
      return total;
    }

    });

})();
