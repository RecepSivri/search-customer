describe('my controller', function(){
    beforeEach(module('myApp'));
    var $controller

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope testing', function(){
        it('checking input value initialized', function(){
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.value).toEqual('');
        })

        it('checking input value on searching', function(){
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.value = 'ann';
            $scope.onSearch();
        })
    })
})