(
    function(){
        angular.module('LunchCheck',[])
        .controller('LunchCheckController',mycontrol);

        mycontrol.$inject = ['$scope'];
        function mycontrol($scope){
            $scope.placeholder="";
            $scope.result = "";
            $scope.check = function(){
                $scope.result = check_comma($scope.placeholder);
            }

            function check_comma(string){
                var item = string.split(",");
                var tlen = item.length;
                var len = tlen;
                var res = "";
                for(var i=0;i<tlen;i++)
                    if(item[i]=="")
                        len-=1;
                if(len==0)
                    res = "Please enter data first";
                else if(len<=3)
                    res = "Enjoy!";
                else
                    res = "Too Much!";
                return res;
            }
        };
    }
)();