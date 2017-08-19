let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer || attempt === ''){
      setHiddenFields()
    }

     if (validateInput(input.value) === false) {
       return false
     }else{
       attempt += 1;
     }

     if (getResults === true) {
       setMessage("You Win! :)");
       showAnswer(true);
       showReply();
     }else if (getResults === false && attempt >= 10){
       setMessage("You Lose :(");
       showAnswer(false);
       showReply();
     }else{
       setMessage("Incorrect, try again.");
     }
}

//implement new functions here

function setHiddenFields() {
  var answer = Math.floor(Math.random() * 10000);
  answer = answer.toString()

  while (answer.length < 4) {
    answer = '00' + answer;
  }

  var attempt = 0;
}

function setMessage(message) {
  document.getElementById("message").innerHTML = message;
}

function validateInput(numberGuessed) {
  numberGuessed = numberGuessed.toString();
  if (numberGuessed.length === 4){
    return true;
  }else{
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(result) {
  let counter = 0;
  result = <div class="row"><span class="col-md-6">' + numberGuessed + '</span><div class="col-md-6">;
  for (var i=0;i<answer.length;i++){
    if (numberGuessed[i] === answer[i]){
      counter += 1;
      result = result + <span class="glyphicon glyphicon-ok"></span>;
    }else{
      result = result + <span class="glyphicon glyphicon-remove"></span>;
    }
  }
  document.getElementById("results").innerHTML = result;

  if (!counter === 4){
    return false;
  }else{
    return true;
  }
}

function showAnswer(show) {
  document.getElementById("code").innerHTML = answer;
  if (show === true) {
    document.getElementById("code").className = document.getElementById("code").className + ' success';
  }else{
    document.getElementById("code").className = document.getElementById("code").className + ' failure';
  }
}

function showReply() {
  document.getElementById("guessing-div").style.display = none;
  document.getElementById("replay-div").style.display = block;
}
