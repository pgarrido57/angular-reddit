app.controller('registerCtrl', function($scope, authFactory, $location) {
    console.log('registerCtrl')
    $scope.register = function () {
        console.log('start register')

        authFactory
          .register($scope.user)
          .then(() => $location.url('/new'))
    }

})
