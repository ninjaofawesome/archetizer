$(document).ready(function(){
  console.log("Fizzbuzz!");

//set up loop x 100 times inject a number
//see if number is divisible between 3,5 or both
//if meets parameters, type out fizz, buzz or fizzbuzz

$('.fizzbuzz-list').each(function(){
  for( i=1; i < 101; i++){
    var num = ' ';
    if (i % 3 === 0 && i % 5 === 0) {
      num += "Fizz Buzz!";
    }
    else if(i % 3 === 0){
      num += "Fizz!";
    }
    else if(i % 5 === 0){
      num += "Buzz!";
    }
    else {
      num = i;
    }
    $(this).append('<li class="each-num">' + num + '</li>');
  }
});

//do the same thing, but make it interesting.

//figure out numbers, shove them into array
var getFizzy = function() {
  var myArray = [];
  for( i=1; i < 101; i++){
    var num = ' ';
    if (i % 3 === 0 && i % 5 === 0) {
      num += "Fizz Buzz!";
      myArray.push(num);
    }
    else if(i % 3 === 0){
      num += "Fizz!";
      myArray.push(num);
    }
    else if(i % 5 === 0){
      num += "Buzz!";
      myArray.push(num);
    }
    else {
      num = i;
      myArray.push(num);
    }
  }
  return myArray;
};

//print out that information on the screen
function printFizzy(array){
  array.each(function(i){
    $('itneractive-fizzbuzz-list').append('<li>' + i + '</li>');
  });
}

printFizzy(getFizzy);

});