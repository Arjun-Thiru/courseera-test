(
    function(){
        angular.module('data')
        .service('MenuDataService',MenuDataService);

        MenuDataService.$inject = ['$http']
        function MenuDataService($http){
            var service = this;

            service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
              }).then(function (response) {
                //console.log(response.data);
                return response.data;
              })
              .catch(function (error) {
                console.log("Something went terribly wrong.");
              });
          };

          service.getItemsForCategory = function(categoryShortName){
            return $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
            }).then(function(response){
                //console.log(response.data.menu_items);
                return response.data.menu_items;
            })
            .catch(function(error){
                console.log("Something went wrong in getItemsForCategory");
            });
          };
            
        }
    }
)();