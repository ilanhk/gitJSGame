

var my_number=0;

var computerNumber =0;


// playTheGame(){
//
// }

function confirm() {
  var q = prompt ("Do you want to play a game? Yes or No?");
if (q==="yes"||q==="Yes"||q==="YES") {
  my_number = parseInt(prompt("Input a number between 0 and 10"));
}
  if (isNaN(my_number)===true) {
    alert("Sorry not a number");
  }
  else if (my_number<0 || my_number>10) {
    alert("Sorry not a good number. Goodbye!");
  }
  else if (my_number>=0 && my_number<=10) {
    computerNumber = Math.floor(Math.random() *11);
    console.log(computerNumber);

    test();
  }
 else { alert("Too Bad, Goodbye!");

}
}

function test(){
    for (var i = 0; i <3; i++) {
      console.log(my_number+"my Input");
   if (my_number === computerNumber) {
     alert("Mazal Tov! You are Victorious!");
       break;
     }
     else if (my_number>computerNumber) {
      my_number= parseInt(prompt("Sorry wrong number,too High try again:"));
     }

     else  {
       my_number = parseInt( prompt("Sorry wrong number,too Low try again:")
     );
     }
}

if (my_number !== computerNumber) {  alert("You have been Defeated! The number was "+ computerNumber);
}
}







confirm()
