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
function myNums(){
    var nums = [];
  for( i=1; i < 101; i++){
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
  }
  return nums;
};

var numbers = myNums();
var i = 0, l = numbers.length;
function iterator() {
  $('.interactive-fizzbuzz-list').append('<li class="each-num">' + numbers[i] + '</li>');

  if(++i<l) {
      setTimeout(iterator, 100);
  }
};

iterator();

});