var alphabet = [ "a","b","c","d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
var guesses = 12;
var foods = ["apple", "almond", "bacon", "banana", "chicken", "cheesecake"];
var animals = ["ant", "cat", "dog", "shark", "chicken", "chimpanzee", "gorilla", "zebra"];
var things = ["astronaut", "architect", "bush", "tide", "wave", "business", "apartment"];
var word = "";
var guessedLetters =  [];

function startGame() {
    selectBox();
    document.getElementById("win").innerHTML = "";
    document.getElementById("lost").innerHTML = "";
    document.getElementById("guesses").innerHTML = "";
    guesses = 12;
    word = "";
    guessedLetters = [];
  var categories =  document.getElementById("categories").value ;

    if(categories == 1){
        word = foods[Math.floor(Math.random() * foods.length)];
    }
    if(categories == 2){
        word = animals[Math.floor(Math.random() * animals.length)];
    }
    if(categories == 3){
        word = things[Math.floor(Math.random() * things.length)];
    }
    console.log(word);

    printWord();
   







    //get value of the categories drop down from page

    //do if statements depending on the value






}

function printWord(){
    var print = " ";
    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) == -1 ){
            print += "_ ";



        }else{
            print += word[i];
        }

    }
    document.getElementById("PrintWord").innerHTML = print;
    return print;


}

function guessLetter(){
    var letter =  document.getElementById("Letters").value;
    guessedLetters.push(letter);
    guesses = guesses - 1;


    if (guesses <= 0){
        document.getElementById("lost").innerHTML = "You Lose. Press Play!! To Play Again!";
    }
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;

    var xx = printWord();
    if(xx.indexOf("_") == -1){
        document.getElementById("win").innerHTML = "You Win. Press Play!! To Play Again!";

    }

    selectBox();



    }

function selectBox(){
    var result = "";
    for(var i = 0; i < alphabet.length ; i++){
        if(guessedLetters.indexOf(alphabet[i]) == -1){
            //write out option tag
            result += "<option value='" + alphabet[i] + "'>" + alphabet[i] + "</option>";
            //<option value="a">A</option>
        }

    }

    console.log(result);
    document.getElementById("Letters").innerHTML = result;
}












