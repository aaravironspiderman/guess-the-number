// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var guess = 0
// made for correct Guess

  
// function for number guessed by user     


function submit(){

  // counting the number of guesses
  var x =document.getElementById("guessField").value;
  // made for correct Guess
  if(x == y)
  {
      alert("Congratulations!!! "+playername+" you guessed it right in " +guess+" GUESS");
      guess= 1;   
  }

  else if (x>y)
  {
      guess++;
      alert("oops sorry!! Try a smaller number");
  }
  else
  {
      guess++;
      alert("oops sorry!! Try a greater number")
  }

} 


function playAgain(){
y = Math.floor(Math.random()*10+1);
}