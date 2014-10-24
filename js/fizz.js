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

$('.interactive-fizzbuzz-list').each(function(){
  for( i=1; i < 101; i++){
    var num = ' ';
    var show = $(this);
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

    setTimeout(function(i, num){
       show.append('<li class="each-num">' + num + '</li>');
    }, i * 600);

  }
});





});