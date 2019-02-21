$( document ).ready(function(){
    // Generates random number to guess
    var Random = Math.floor(Math.random()* 120 +19);

 // Displays the random number
$('#scoreToMatch').text(Random);

//Generates a random number for each crystal
var redNum = Math.floor(Math.random()*12+1);
var blueNum = Math.floor(Math.random()*12+1);
var yellowNum = Math.floor(Math.random()*12+1);
var greenNum = Math.floor(Math.random()*12+1);

// Variables to keep track of wins, losses and totals
var playerTotal = 0; 
var wins = 0;
var losses = 0;


//$('#wins').text(wins);
//$('#losses').text(losses);

// Resets the game
function resetGame(){
    Random =Math.floor(Math.random()*102+19);
    //console.log(Random)
    $('#scoreToMatch').text(Random);
    redNum = Math.floor(Math.random()*12+1);
    blueNum = Math.floor(Math.random()*12+1);
    yellowNum = Math.floor(Math.random()*12+1);
    greenNum = Math.floor(Math.random()*12+1);
    playerTotal = 0;
    $('#totalScore').text(playerTotal);
    } 
// Displays wins
function winner(){
alert("Congratulations! You won!");
wins++; 
$('#wins').text(wins);
resetGame();
}
// Displays losses
function loser(){
alert ("Sorry! You lose!");
losses++;
$('#losses').text(losses);
resetGame()
}
// Clicking on crystals
$('.red').on ('click', function(){
  playerTotal += redNum;
  //console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal); 
        //Win & lose conditions
      if (playerTotal == Random){
        winner();
      }
      else if ( playerTotal > Random){
        loser();
      }   
})  
$('.blue').on ('click', function(){
  playerTotal += blueNum;
  //console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal); 
      if (playerTotal == Random){
        winner();
      }
      else if ( playerTotal > Random){
        loser();
      } 
})  
$('.yellow').on ('click', function(){
  playerTotal += yellowNum;
  //console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal);

        if (playerTotal == Random){
        winner();
      }
      else if ( playerTotal > Random){
        loser();
      } 
})  
$('.green').on ('click', function(){
  playerTotal += greenNum;
  //console.log("New playerTotal= " + playerTotal);
  $('#totalScore').text(playerTotal); 
    
        if (playerTotal == Random){
        winner();
      }
      else if ( playerTotal > Random){
        loser();
      }
});   
}); 
