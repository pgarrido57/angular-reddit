const app = angular.module('ng-reddit', ['ngRoute'])

app.config(function($routeProvider) {

  var config = {
    apiKey: "AIzaSyCxrBWmcvCmg_0dUfYCVcB6D_HbleEBDps",
    authDomain: "reddit-3f73e.firebaseapp.com",
    databaseURL: "https://reddit-3f73e.firebaseio.com",
    storageBucket: "reddit-3f73e.appspot.com",
    messagingSenderId: "989170010134"
  };
  firebase.initializeApp(config);

  const userStatus = {
      authState:function ($location){
          console.log("hey");
          const unsubscribe = firebase.auth().onAuthStateChanged(user =>{
              unsubscribe()
              console.log("userStatus", user);
              if (!user){
                  $location.url('/')
              }
          })
      }
  }

  $routeProvider
    .when('/', {
      controller: 'postsCtrl',
      templateUrl: 'partails/posts.html'
    })
    .when('/new', {
      controller: 'newPostCtrl',
      templateUrl: 'partails/new.html'
    })
    .when('/posts/:postId', {
      controller: 'postCtrl',
      templateUrl: 'partails/post.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});

app.filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  }
});
