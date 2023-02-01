describe('my controller', function(){
    beforeEach(module('myApp'));
    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope testing', function(){
        it('checking input value initialized', function(){
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            expect($scope.value).toEqual('');
        });

        it('checking input value on searching', function(){
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.value = 'ann';
            $scope.onSearch();
            expect($scope.list).toEqual( [
                {name: 'Ann Liebmann', phone: '+27-61-453-5444', mail: 'ann.lieb@', policyNo: '0013983887 | 0013983887'},
                {name: 'Ann Summer', phone: '+27-62-353-5444', mail: 'ann.summer@', policyNo: '0013923887 | 0013983887'},
                {name: 'Annabelle Samuel', phone: '+27-62-323-5444', mail: 'annebelle.samuel@', policyNo: '0013923788 | 0013923788'},
                {name: 'Ann Johnson', phone: '+27-62-373-5444', mail: 'ann.johnson@', policyNo: '0013923787 | 0013923787'}
            ]);
        });

        it('checking input value on searching with empty input', function(){
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.value = '';
            $scope.onSearch();
            expect($scope.list).toEqual([]);
            expect($scope.showDropdownList).toEqual(false);
        });
    });
});