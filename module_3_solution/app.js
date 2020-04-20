(
    function(){
        'use strict';

        angular.module('NarrowItDownApp',[])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .directive('foundItems', foundItems);

        function foundItems() {
            var ddo = {
              templateUrl: 'foundItemList.html',
              scope: {
                  found : '<',
                  remove: '&'
              },
              controller: foundItemsDirectiveController,
              controllerAs: 'controller',
              bindToController: true
            };
          
            return ddo;
          }

          function foundItemsDirectiveController(){
              var controller = this;
          }

        NarrowItDownController.$inject = ['MenuSearchService'];
        function NarrowItDownController(MenuSearchService){
            var ctrl = this;
            ctrl.search = "";
            ctrl.getItems = function(){
                ctrl.error = "";
                var promise = MenuSearchService.getMatchedMenuItems(ctrl.search);
                promise.then(function(result){
                    ctrl.found = result;
                    //console.log(ctrl.found);
                    if(ctrl.found.length == 0){
                        ctrl.error = "Nothing Found";
                    }
                }).catch(function (error) {
                    console.log("Something went terribly wrong.");
                  });   
            }
            ctrl.removeItem = function (itemIndex) {
                console.log(itemIndex);
                MenuSearchService.removeItem(ctrl.found,itemIndex);
              };


        }

        MenuSearchService.$inject = ['$http'];
        function MenuSearchService($http){
            var service = this;

            service.getMatchedMenuItems = function (searchTerm) {
                
                return $http({
                    method: "GET",
                    url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
                  }).then(function (response) {
                    //console.log(response.data);
                    var foundItemsArr =[];
                    var j=0;
                    var allItems = response.data.menu_items;
                    if(searchTerm == ""){
                        return foundItemsArr;
                    }
                    for(var i=0;i<allItems.length;i++){
                        //console.log(allItems[i].description);
                        var currentDesc = allItems[i].description;
                        currentDesc = currentDesc.toLowerCase();
                        searchTerm = searchTerm.toLowerCase();
                        if(currentDesc.includes(searchTerm)){
                            foundItemsArr[j] = allItems[i];
                            j+=1;
                        }
                        //console.log(currentDesc+"  -----    "+searchTerm);
                    }
                    /*console.log(foundItems.length);
                    for(var i=0;i<foundItems.length;i++){
                        console.log(i+" " +foundItems[i].description);
                    }*/
                    
                    return foundItemsArr;
                  })
                  .catch(function (error) {
                    console.log("Something went terribly wrong.");
                  });
              };

              service.removeItem = function (foundArr,itemIndex) {
                  //console.log(foundArr);
                  foundArr.splice(itemIndex, 1);
              };
            
        }
    }
)();