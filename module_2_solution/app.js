(
    function(){
        'use strict';

        angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService){
            var ToBuy = this;
            ToBuy.dispToBuyItems = ShoppingListCheckOffService.getToBuyItems();
            ToBuy.boughtItem = function(itemIndex){
                try {
                    ShoppingListCheckOffService.boughtItem(itemIndex);
                } catch (error) {
                  ToBuy.errorMessage = error.message;
                }
            };
        }

        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
        function AlreadyBoughtController(ShoppingListCheckOffService){
            var AlreadyBought = this;
            AlreadyBought.dispBoughtItems = ShoppingListCheckOffService.getBoughtItems();
        }

        function ShoppingListCheckOffService(){
            var service = this;
            var tobuyArr = [
                {name:"Cookies" , quantity:"10"},
                {name:"Lays" , quantity:"5"},
                {name:"Chocolate" , quantity:"10"},
                {name:"Ice Cream" , quantity:"7"},
                {name:"Candy" , quantity:"20"}
            ];
            var boughtArr = [];
            service.boughtItem = function (itemIndex) {
                var item = tobuyArr.splice(itemIndex, 1);
                boughtArr.push(item[0]);
                if(tobuyArr.length==0){
                    throw new Error("Everything is bought!")
                }
                
              };

            service.getToBuyItems = function () {
                return tobuyArr;
              };

            service.getBoughtItems = function () {
                return boughtArr;
              };
        
            
        }


    }
)();