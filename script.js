var answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
var no_of_guesses = 0;
var guessed_nums = [];

var check = document.querySelector(".btn1");
console.log(check);
var reset =document.querySelector(".reset");
var guess =Number(document.querySelector(".input").value);
console.log(guess);
var msg = document.querySelector(".msg");
var history = document.querySelector(".history")
var number = document.querySelector(".number")



check.addEventListener ('click', function(){ 
    let guess =Number(document.querySelector(".input").value);                             
    if (guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
     else if (guess < answer) {
         guessed_nums.push(guess);        no_of_guesses+= 1;  
             msg.textContent = "Your guess is too low.";
             document.querySelector(".history").innerHTML =" No. of guesses: " + no_of_guesses;
             document.querySelector(".number").innerHTML = "Guessed numbers are: " +
             guessed_nums;
     }
         else if(guess > answer) {
            guessed_nums.push(guess);        no_of_guesses+= 1; 
             msg.textContent = "Your guess is too high.";
             document.querySelector(".history").innerHTML =" No. of guesses: " + no_of_guesses;
             document.querySelector(".number").innerHTML = "Guessed numbers are: " +
             guessed_nums;
         }
        else if(guess === answer) {
            guessed_nums.push(guess);        no_of_guesses+= 1; 
             msg.textContent = "Congrats You Win!!" + "The number was: " + answer;
             
             document.querySelector(".reset").disabled = true;
            //document.querySelector(".score").innerHTML = "Score : " + no_of_guesses;//
       if (score > highscore) {
             highscore = score;
         }
         
    }
})
