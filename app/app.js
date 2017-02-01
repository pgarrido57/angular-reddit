const app = angular.module('AnguReddit', ['ngRoute'])

app.config(function ($routeProvider) {

  // Initialize Firebase
  firebase.initializeApp({
      apiKey: "AIzaSyCxrBWmcvCmg_0dUfYCVcB6D_HbleEBDps",
      authDomain: "reddit-3f73e.firebaseapp.com",
      databaseURL: "https://reddit-3f73e.firebaseio.com",
      storageBucket: "reddit-3f73e.appspot.com",
      messagingSenderId: "989170010134"
  });

  // this checks to make sure user is signed in
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
      controller: 'loginCtrl',
      templateUrl: '/app/partails/login.html'
     })
      .when('/register', {
      controller: 'registerCtrl',
      templateUrl: '/app/partails/register.html',
    })
      .when('/news', {
      controller : 'newsCtrl',
      templateUrl : '/app/partails/new.html',
      resolve : userStatus
    })
      .when('/post', {
      controller: 'postCtrl',
      templateUrl: '/app/partials/post.html',
      resolve : userStatus
    })
      .when('/posts', {
      controller: 'postsCtrl',
      templateUrl: '/app/partials/posts.html',

    })
    .otherwise ({
        redirectTo: '/'
    })
})
