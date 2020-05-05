(function(){
  "use strict";

  angular
    .module('public')
    .controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['myInfo', 'ApiPath'];
  function MyinfoController(myInfo, ApiPath) {

    var $ctrl = this;
    $ctrl.basePath = ApiPath;

    $ctrl.newsletterFormData = myInfo;

    if($ctrl.newsletterFormData.hasOwnProperty("registered")){
      $ctrl.showInfo = true;
    } else {
      $ctrl.showInfo = false;
    }


  }

})();