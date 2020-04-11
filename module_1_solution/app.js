(
    function(){
        angular.module('LunchCheck',[])
        .controller('LunchCheckController',mycontrol)
        .filter('aju',AjuFilter) ;

        mycontrol.$inject = ['$scope','ajuFilter'];
        function mycontrol($scope,ajuFilter){
            $scope.placeholder="";
            $scope.result = "";
            $scope.check = function(){
                $scope.result = check_comma($scope.placeholder);
            };

            function check_comma(string){
                var item = string.split(",");
                var tlen = item.length;
                var len = tlen;
                var res = "";
                for(var i=0;i<tlen;i++)
                    if(item[i]=="")
                        len-=1;
                if(len==0){
                    res = "Please enter data first";
                    res = ajuFilter(res);}
                else if(len<=3)
                    res = "Enjoy!";
                else
                    res = "Too Much!";
                return res;
            };
        }

        function AjuFilter(){
            return function(input){
                input = input.replace("Please","Kindly");
                return input;
            }
        }
    
})();