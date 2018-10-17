angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('FibonacciCtrl', function($scope) {
$scope.fibonacci =function(n){
  var i;
$scope.fib = []; // Initialize array!

$scope.fib[0] = 0;
$scope.fib[1] = 1;
for (i = 2; i < n; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  $scope.fib[i] = $scope.fib[i - 2] + $scope.fib[i - 1];
  console.log($scope.fib[i]);
}
}
})

.controller('PrimeCtrl', function($scope, $stateParams) {
  $scope.isPrime= function (num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }
})
.controller('PalindromeCtrl', function($scope, $stateParams) {
  function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
       
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
     
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
  }
   
  console.log(palindrome("able was i ere i saw elba"));
  
});
