app.controller('loginCtrl', function ($scope, $location, authFactory) {
    $scope.login = () => authFactory
      .login($scope.user)
      .then(() => $location.url('/new'))
})
