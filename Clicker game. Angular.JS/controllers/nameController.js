app.controller('nameController', function($scope, $http) {
    $scope.choosePerson = {
        person1: {firstName : "Tadas", lastName : "S*******s"},
        person2: {firstName : "Tomas", lastName : "R***s"},
        person3: {firstName : "Vytautas", lastName : "P*****a"}
    };

    $scope.changeName = function() {
        $scope.transcended = "Transcended ";
    };

    $scope.hideList = function(x) {

        if (x == "1") {
            $scope.showMe1 = !$scope.showMe1;
        }
        if (x == "2") {
            $scope.showMe2 = !$scope.showMe2;
        }
    };

    $scope.nameList = [
        {name:'Oreo',country:'Venus',price:14},
        {name:'Oroo',country:'Mars',price:21},
        {name:'Ormi',country:'Cleveland',price:17},
        {name:'Oree',country:'Ronaldia',price:31},
        {name:'Kommel',country:'Cleveland',price:16},
        {name:'Dola',country:'Malibu',price:34},
        {name:'Forend',country:'Ronaldia',price:52},
        {name:'Sergo',country:'Germany',price:14},
        {name:'Lory',country:'Moon',price:21},
        {name:'Tony',country:'Deli',price:20},
        {name:'Heron',country:'Mars',price:17},
    ];

    $http.get("assets/customers.php")
        .then(function(response) {
            $scope.myData = response.data.records;
        });

    $scope.orderCats = function(x){
        $scope.orderList = x;
    };

    $scope.mouseMove = function(mouseLoc) {
        $scope.x = mouseLoc.clientX;
        $scope.y = mouseLoc.clientY;
    }

});

app.controller('userCtrl', function($scope, $location){
    $scope.myUrl = $location.absUrl();
});

app.controller('httpReq', function($scope, $http) {
    $http.get("assets/welcome.html")
    .then(function(response) {
        $scope.myWelcome = response.data;
    }, function(response) {
        $scope.myWelcome = "Something is Wrong";
    });
});

app.controller("timerMsg", function($scope, $timeout) {
    $timeout(function () {
        $scope.timerWarning = "You've been staying for too long now!";
    }, 5000);
});

app.controller("timer", function($scope, $interval) {
    $scope.time = new Date().toLocaleTimeString();
    $interval(function() {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);
})
