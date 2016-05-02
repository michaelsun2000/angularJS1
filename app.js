angular.module('app',[]);

angular.module('app').controller('MyCtrl', ['$scope', '$http', function($scope,$http){
    $scope.searchname='test';
    $scope.search = function (){
        alert($scope.searchname);
    };
    
    $http.get('data.json').then(function(response){
        var result=response.data,users;

        if(result.success){
            users=result.users;
            $scope.users=users;
        }else{
            alert('failed');
        }

        alert(response);
    }, function(){
        alert('failed');
    });
    
    console.log('dddd');
    
    
}]);
//==
//angular.module('app').controller('MyCtrl', ['$scope', function(abc){}]);
//angular.module('app').controller('MyCtrl', function($scope){});
//no minified, it works. if minified, the scope will be changed --> wrong

angular.module('app').directive('searchPanel',[function(){
    return {
        template: '<div>' +
        '<label for="searchname">Name:</label><input id="searchname" ng-model="searchname" placeholder="Enter a name" >'+
        '<button ng-click="search()">search</button>' +
        '</div>'
    };
}]);

angular.module('app').directive('resultPanel',function(){
    return {
        templateUrl: 'returnResult.html'
    };
});


angular.module('app').directive('genderFilter',[function(){

    return function(gender, p2) {
        if(gender == 'M'){
            return 'Male';
        }else if(gender=='F'){
            return 'Female';
        }

        return '';

    };
}]);
