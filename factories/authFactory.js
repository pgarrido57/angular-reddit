app.factory('authFactory', ($q, $http) => {
    return {
        login (user) {
            console.log("email", user.email);
            console.log("pass", user.password);
            return $q.resolve(firebase.auth().signInWithEmailAndPassword( user.email, user.password))
        },
        getUserId(){
            return firebase.auth().currentUser.uid
        },
        register(user){
            console.log("user", user);
        return $q.resolve(firebase.auth().createUserWithEmailAndPassword(user.email, user.password))

        }
    }
})
