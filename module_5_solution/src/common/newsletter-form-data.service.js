(function(){
  "use strict";

  angular
    .module('common')
    .service('FormDataService', FormDataService);

  function FormDataService () {
    var service = this;

    service.formDataStorage = {
      menunumber: '',
      user: {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: ''
      }
    };

    service.updateFormDataStorage = function (formDataUserObj) {
      service.formDataStorage = formDataUserObj;
    };

    service.getFormDataStorage = function () {
      return service.formDataStorage;
    }

  }

})();