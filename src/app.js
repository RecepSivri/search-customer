var app = angular.module('myApp', []);
app.controller('mainController', ["$scope", function($scope) {
   $scope.value = '';
   $scope.showDropdownList = false;
   var data = [
      {name: 'Ann Liebmann', phone: '+27614535444', mail: 'ann.lieb@', policyNo: '0013983887 | 0013983887'},
      {name: 'Ann Summer', phone: '+27623535444', mail: 'ann.summer@', policyNo: '0013923887 | 0013983887'},
      {name: 'Ann Johnson', phone: '+27623735444', mail: 'ann.johnson@', policyNo: '0013923787 | 0013923787'},
      {name: 'Ann Willson', phone: '+27623235444', mail: 'ann.willson@', policyNo: '0013923788 | 0013923788'},
      {name: 'Naomi Will', phone: '+27623235444', mail: 'naomi.will@', policyNo: '0013923782 | 0013923782'},
      {name: 'Kim Hyoung', phone: '+27621235444', mail: 'kim.hyeung@', policyNo: '0013923282 | 0013923282'},
      {name: 'Richard Watson', phone: '+27621135444', mail: 'richard.watson@', policyNo: '0012923282 | 0012923282'},
      {name: 'Hans Fitler', phone: '+27621133444', mail: 'hans.fitler@', policyNo: '0012223282 | 0012223282'},
      {name: 'John William', phone: '+27221133444', mail: 'john.william@', policyNo: '0012623282 | 0012623282'},
      {name: 'Phuong Lee', phone: '+27221132444', mail: 'phuong.lee@', policyNo: '0012723282 | 0012723282'},
      {name: 'Murat Yılmaz', phone: '+27621132454', mail: 'murat.yilmaz@', policyNo: '0018723282 | 0018723282'},
      {name: 'Mehmet Öztürk', phone: '+27611132444', mail: 'mehmet.ozturk@', policyNo: '0011723282 | 0011723282'}];

   $scope.onSearch = function () { 
      $scope.showDropdownList = true
  };
}]);