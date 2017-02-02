app.controller('newsCtrl', function($scope, $q, $location) {

    $scope.newComment = {};
    $scope.newPost = {};
    $scope.view = {};
    $scope.view.searchPosts = "";
    $scope.view.newPostVisible = false;
    $scope.view.sortOptions = ['votes', 'date', 'title'];
    $scope.view.sortOption = $scope.view.sortOptions[0];
    $scope.view.orderVal = '-votes';
    $scope.view.posts = [{
        title: "I'm Old Legg!",
        author: "James West",
        image: "https://media.giphy.com/media/l0ExaPXUfVVckxxVS/source.gif",
        description: "Just another day in class at NSS",
        date: moment().subtract(1, 'days').subtract(3, 'hours').calendar(),
        votes: 24,
        comments: [{
            author: "Tambo",
            text: "Hey I can see my hand."
        }],
        commentsVisible: false,
        newCommentVisible: false
    }, {
        title: "The Rock Duck Hunt Edition",
        author: "Stanley Goodspeed",
        image: "https://thechive.files.wordpress.com/2017/02/daily-afternoon-randomness-49-photos-21.gif?w=528",
        description: "Stanley Goodspeed: How do you… do it?!",
        date: moment().subtract(2, 'hours').calendar(),
        votes: 6,
        comments: [{
            author: "John Mason",
            text: "I was trained by the best. British intelligence. But in retrospect I would rather have been a poet. Or a farmer."
        }, {
            author: "Stanley Goodspeed",
            text: "You dont say"
        }],
        commentsVisible: false,
        newCommentVisible: false
    }, {
        title: "You are my only hope!!!!",
        author: "Leia Organa",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSErJeHG_g5ned9wHMxF4gMfR0N1NSPJW7KZrMzCtb0YSmmqZDU",
        description: "When you can't figure out why your code isnt working",
        date: moment("20151010", "YYYYMMDD").calendar(),
        votes: 3,
        comments: [],
        commentsVisible: false,
        newCommentVisible: false
    }];

    $scope.changeVotes = function(post, changeVal) {
        post.votes += changeVal;
    };

    $scope.upvoteClass = function(post) {
        if (post.votes > 0) {
            return "positive";
        } else if (post.votes < 0) {
            return "negative";
        } else {
            return "";
        }
    };

    $scope.toggleCommentVisibility = function(post) {
        post.commentsVisible = !post.commentsVisible;
    };

    $scope.toggleNewCommentVisibility = function(post) {
        $scope.view.posts.forEach(function(otherPost) {
            if (otherPost !== post) {
                otherPost.newCommentVisible = false;
            } else {
                otherPost.newCommentVisible = !otherPost.newCommentVisible;
            }
        });
        $scope.newComment = {};
    };

    $scope.toggleNewPostVisibility = function() {
        $scope.view.newPostVisible = !$scope.view.newPostVisible;
    };

    $scope.addComment = function(post, comment) {
        if (comment.author && comment.text) {
            post.comments.push(comment);
            post.newCommentVisible = false;
            $scope.newComment = {};
        }
    };

    $scope.addPost = function(post) {
        post.date = moment().calendar();
        post.votes = 0;
        post.comments = [];
        post.commentsVisible = false;
        post.newCommentVisible = false;
        $scope.view.posts.push(post);
        $scope.view.newPostVisible = false;
        $scope.newPost = {};
        $scope.postForm.$setUntouched();
    };

    $scope.checkForError = function(option) {
        return option.$invalid && option.$touched;
    };

    $scope.setOrderVal = function(newVal) {
        $scope.view.sortOption = newVal;
        $scope.view.orderVal = newVal === "title" ? newVal : '-' + newVal;
    };

    $scope.logout = function() {
        return $q.resolve(firebase.auth().signOut())
        .then(()=>{
            $location.url('/')
        })

    }

});
