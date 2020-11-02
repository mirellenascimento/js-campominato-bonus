// FIXED VAR
var MIN = 1;
var MAX = 100;
var RANDOM = 99;
var ROUNDS = MAX - RANDOM;
var BOMBS = 5;


// SETTING THE BOMBS
var bombNumbers = [];

do {
  // GENERANTING THE NUMBERS
  var compNumber = randomNumber(MIN, MAX);
  console.log(compNumber);

  // AVOIDING REPEATED NUMBERS
  var present = verify(compNumber, bombNumbers)
  if (!present){
      bombNumbers.push(compNumber);
  }
} while (bombNumbers.length < RANDOM);
console.log(bombNumbers.sort());


// THE GAME WITH DEFAULT LEVEL
// VARIABLES
var square = []
var result = 0;
var explosions = 0;

// SOUNDS
var footstep = new Audio('sounds/footstep.mp3');
var bomb = new Audio('sounds/bomb.mp3');

// CREATING THE SQUARES BASED ON THE LEVEL
for (var i = 0; i < MAX; i++) {
  square[i] = document.createElement("div")
  square[i].className = "sq_" + MAX
  document.getElementById("squares").appendChild(square[i])
  square[i].value = i + 1

  //STARTING THE GAME
  square[i].addEventListener("click", function(){
    do{
      var squareValue = parseInt(event.target.value)

      // BLOCKING THE GAME IF USER LOSES OR WINS
      if (explosions > 4){
        document.getElementsByClass("sq_" + MAX).disabled = true;

      //EXPLOSIONS
      else if (verify(squareValue, bombNumbers)){
        event.target.style.backgroundImage = "url('img/bomb.png')"
        event.target.style.backgroundColor = "red";
        bomb.play();
        explosions += 1;
        document.getElementById("puntiRight").innerHTML = "00" + explosions;
        if (explosions <= 4){
          alert("BOMBA!!! Hai ancora " + (BOMBS - explosions) + " possibilità");
        } else if (explosions > 4){
          alert("HAI PERSO!")

      // GRASS
      } else {
        if (explosions <= 4){
          event.target.style.backgroundImage = "url('img/grass.jpg')"
          footstep.play();
          result += 10;
          if (result < 100){
            document.getElementById("puntiLeft").innerHTML = "0" + result;
          } else {
            document.getElementById("puntiLeft").innerHTML = result;
          }
        }
      }
      i++
    } while ((explosions < 5) && (i < (MAX - bombNumbers.length)));
  })
}

// SETTING GAME LEVEL

document.getElementById("level").addEventListener("change", function(){
  var level = parseInt(event.target.value)
  document.getElementById('squares').innerHTML = "";

  switch (level) {
    case 1:
      MAX = 100;
      break;
    case 2:
      MAX = 81;
      break;
    case 3:
      MAX = 49;
      break;
    default: 1
    }

    RANDOM = 16;
    ROUNDS = MAX - RANDOM;

    // SETTING THE BOMBS
    var bombNumbers = [];

    do {
      // GENERANTING THE NUMBERS
      var compNumber = randomNumber(MIN, MAX);
      console.log(compNumber);

      // AVOIDING REPEATED NUMBERS
      var present = verify(compNumber, bombNumbers)
      if (!present){
          bombNumbers.push(compNumber);
      }
    } while (bombNumbers.length < RANDOM);
    console.log(bombNumbers);


    console.log("level is:", level, "; after switch, MAX value is:", MAX, "; the number or rounds is::", ROUNDS, " and there are ", bombNumbers.length, " bombs.");

    // THE GAME WITH NEW LEVEL
    // VARIABLES
    var square = []
    var result = 0;
    var explosions = 0;

    // SOUNDS
    var footstep = new Audio('sounds/footstep.mp3');
    var bomb = new Audio('sounds/bomb.mp3');

    // CREATING THE SQUARES BASED ON THE LEVEL
    for (var i = 0; i < MAX; i++) {
      square[i] = document.createElement("div")
      square[i].className = "sq_" + MAX
      document.getElementById("squares").appendChild(square[i])
      square[i].value = i + 1

      //STARTING THE GAME
      square[i].addEventListener("click", function(){
        do{
          var squareValue = parseInt(event.target.value)

          // BLOCKING THE GAME IF USER LOSTS
          if (explosions > 4){
            document.getElementsByClass("sq_" + MAX).disabled = true;
          }

          //EXPLOSIONS
          else if (verify(squareValue, bombNumbers)){
            event.target.style.backgroundImage = "url('img/bomb.png')"
            event.target.style.backgroundColor = "red";
            bomb.play();
            explosions += 1;
            document.getElementById("puntiRight").innerHTML = "00" + explosions;
            if (explosions <= 4){
              alert("BOMBA!!! Hai ancora " + (BOMBS - explosions) + " possibilità");
            } else if (explosions > 4){
              alert("HAI PERSO!")
            }

          // GRASS
          } else {
            if (explosions <= 4){
              event.target.style.backgroundImage = "url('img/grass.jpg')"
              footstep.play();
              result += 10;
              if (result < 100){
                document.getElementById("puntiLeft").innerHTML = "0" + result;
              } else {
                document.getElementById("puntiLeft").innerHTML = result;
              }
            }
          }
          i++
        } while ((explosions < 5) && (i < (MAX - bombNumbers.length)));
      })
    }
  });
