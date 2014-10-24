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

var i = 1;

function myLoop () {
   setTimeout(function () {
      var nums = [];
      var num = ' ';
      if (i % 3 === 0 && i % 5 === 0) {
        num += "Fizz Buzz!";
        nums.push(num);
      }
      else if(i % 3 === 0){
        num += "Fizz!";
        nums.push(num);
      }
      else if(i % 5 === 0){
        num += "Buzz!";
        nums.push(num);
      }
      else {
        num = i;
        nums.push(num);
      }
      i++;
      if (i < 101) {
         myLoop();
      }

      console.log(nums);

      $(nums).each(function(){
        var individualNum = $(this).splice();
        $('.itneractive-fizzbuzz-list').append('<li class="my-nums">' + individualNum + '</li>' );

      });


   }, 100)
}

myLoop();

var items = [];




// //figure out numbers, shove them into array
// var getFizzy = function() {
//   var myArray = [];
//   for( i=1; i < 101; i++){
//     var num = ' ';
//     if (i % 3 === 0 && i % 5 === 0) {
//       num += "Fizz Buzz!";
//       myArray.push(num);
//     }
//     else if(i % 3 === 0){
//       num += "Fizz!";
//       myArray.push(num);
//     }
//     else if(i % 5 === 0){
//       num += "Buzz!";
//       myArray.push(num);
//     }
//     else {
//       num = i;
//       myArray.push(num);
//     }
//   }
//   return myArray;
// };

// //print out that information on the screen
// function printFizzy(array){
//   array.each(function(i){
//     $('itneractive-fizzbuzz-list').append('<li>' + i + '</li>');
//   });
// }

// printFizzy(getFizzy);

});