(
    function () {
        angular.module('data')
            .component('items', {
                templateUrl: 'Data/templates/ItemsList.html',
                bindings: {
                    item: '<'
                  }
            })
    }
)();