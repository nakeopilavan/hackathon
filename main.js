var value = 0;

document.getElementById('score').innerText = ('Score: ' + value);

document.getElementById('wrong').onclick = wrongAnswer;

function wrongAnswer(){
    document.getElementById('answer').innerText = "That's the wrong answer";

}