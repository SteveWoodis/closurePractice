//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer();


//Once you do that, invoke inner.

  //Code Here

inner();

//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var calling = callFriend();
calling('435-215-9268');

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
 var makeCounter = function(){
  var num = 0;
  function callF(number){
    return number;
  }
  return callF;
};


  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's only argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/
var first = makeCounter(function(){alert('Here');},3);  

var makeCounter = function(first,num){
            var called = false;
            
            return function(){
                if( num !== 0){
                    first();
                    called = true;
                    --num;
                }
                else
                {
                    return console.log('stop');
                }
              }
            }   
  
var second = makeCounter(function() {alert("Here");}, 3);


  


