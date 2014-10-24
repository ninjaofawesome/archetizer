$(document).ready(function(){
  console.log("Fizzbuzz!");

//set up loop x 100 times inject a number

$('.fizzbuzz-list').each(function(){
  for( i=1; i < 101; i++){
    var num = i;
    $(this).append('<li class="each-num">' + num + '</li>');
  }
});


//see if number is divisible between 3,5 or both
//if meets parameters, type out fizz, buzz or fizzbuzz

// if (num % 3 && num % 5){function(){
//   document.write("fizzbuzz");
//   }
// }
// } else if (num % 3) {
//   return "fizz"
// } else if (num % 5) {
//   return "buzz"
// } else {
//   return num;
// };

});