(
    function(){
        angular.module('MenuApp')
        .controller('ItemDetailController',ItemDetailController);

        ItemDetailController.$inject = ['items'];
        function ItemDetailController(items){
            var ItemData = this;
            //console.log(items);
            ItemData.items = items;
            
        }
    }
)();