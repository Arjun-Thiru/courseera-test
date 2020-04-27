(
    function(){
        angular.module('MenuApp')
        .controller('CategoriesController',CategoriesController);

        CategoriesController.$inject = ['category'];
        function CategoriesController(category){
            var menuData = this;
            menuData.categories = category;
            
        }
    }
)();