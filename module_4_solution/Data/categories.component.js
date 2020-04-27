(
    function () {
        angular.module('data')
            .component('categories', {
                templateUrl: 'Data/templates/CategoriesList.html',
                bindings: {
                    category: '<'
                  }
            })
    }
)();