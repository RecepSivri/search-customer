var app = angular.module('myApp', []);
app.controller('mainController', ["$scope", function($scope) {
   $scope.value = '';
   $scope.showDropdownList = false;
   $scope.list = [];
   const data = [
      {name: 'Ann Liebmann', phone: '+27-61-453-5444', mail: 'ann.lieb@', policyNo: '0013983887 | 0013983887'},
      {name: 'Ann Summer', phone: '+27-62-353-5444', mail: 'ann.summer@', policyNo: '0013923887 | 0013983887'},
      {name: 'Annabelle Samuel', phone: '+27-62-323-5444', mail: 'annebelle.samuel@', policyNo: '0013923788 | 0013923788'},
      {name: 'Ann Johnson', phone: '+27-62-373-5444', mail: 'ann.johnson@', policyNo: '0013923787 | 0013923787'},
      {name: 'Naomi Will', phone: '+27-62-323-5444', mail: 'naomi.will@', policyNo: '0013923782 | 0013923782'},
      {name: 'Kim Hyoung', phone: '+27-62-123-5444', mail: 'kim.hyeung@', policyNo: '0013923282 | 0013923282'},
      {name: 'Richard Watson', phone: '+27-62-113-5444', mail: 'richard.watson@', policyNo: '0012923282 | 0012923282'},
      {name: 'Hans Fitler', phone: '+27-62-113-3444', mail: 'hans.fitler@', policyNo: '0012223282 | 0012223282'},
      {name: 'John William', phone: '+27-22-113-3444', mail: 'john.william@', policyNo: '0012623282 | 0012623282'},
      {name: 'Phuong Lee', phone: '+27-22-113-2444', mail: 'phuong.lee@', policyNo: '0012723282 | 0012723282'},
      {name: 'Murat Yılmaz', phone: '+27-62-113-2454', mail: 'murat.yilmaz@', policyNo: '0018723282 | 0018723282'},
      {name: 'Mehmet Öztürk', phone: '+27-61-113-2444', mail: 'mehmet.ozturk@', policyNo: '0011723282 | 0011723282'}];

   $scope.onSearch = function () { 
      if($scope.value.length > 0){
         $scope.list = data.filter((val) => {
            return val.name.toLowerCase().includes($scope.value.toLowerCase()) || 
            val.phone.toLowerCase().includes($scope.value.toLowerCase()) || 
            val.mail.toLowerCase().includes($scope.value.toLowerCase()) || 
            val.policyNo.toLowerCase().includes($scope.value.toLowerCase());
         });
         $scope.showDropdownList = true;
      }else{
         $scope.list = [];
         $scope.showDropdownList = false;
      }
  };
}]);