let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 21;
let countdown;



const quizArray = [
{
    id:"0",
    question: " ¿De cuanto es el angulo de la luz de babor _____ y estribor ______ de un buque? ",
    options: [
        "112,5 y 112,5",
        "125 y 130",
        "360",
        "TODAS LAS ANTERIORES",

    ],
    correct: "112,5 y 112,5",
},

{
    id:"1",
    question: " ¿De que color son las luces de estribor y babor?",
    options: [
        "Verde y rojas",
        "Blancas y amarillas",
        "Verde y amarillas",
        "NINGUNA DE LAS ANTERIORES",

    ],
    correct: "Verde y rojas",
},
{
    id: "2",
    question: " ¿Que luz debe llevar un buque remolcador durante la noche?",
    options: [
        "Una luz blanca en la popa",
        "Una luz amarilla encima de la luz de alcance en la popa",
        "Una luz verde en la proa",
        "Tres luces blancas en la popa",

    ],
    correct: "Una luz amarilla encima de la luz de alcance en la popa",

},

{
    id:"3",
    question: "¿Qué tipo de luces deben mostrar los buques en navegación durante la noche?",
    options: [
        "Solo una luz blanca en la proa",
        "Luces de posición: una luz de tope hacia proa, una luz de tope hacia popa mas alta, luces de costadoy una luz de alcance",
        "Solo luces de costado",
        "Ninguna luz",

    ],
    correct: "Luces de posición: una luz de tope hacia proa, una luz de tope hacia popa mas alta, luces de costadoy una luz de alcance"
},


{
    id:"4",
    question: " Una embarcacion de pesca con redes de arrastre, cuando está en faena, debe exhibir",
    options: [
        "Una luz verde sobre una luz blanca.",
        "Una luz roja sobre una luz blanca",
        "Dos luces verdes en vertical",
        "Una luz roja sobre una luz verde",

    ],
    correct: "REDUCIR LA VELOCIDAD Y ESPERAR INSTRUCCIONES DEL OTRO BUQUE",
},



];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");

});

nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length ) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML= "Your  Score  is " + 
        scoreCount + "  Out Of  " +   questionCount;
    } else{
   
        countOfQuestion.innerHTML= questionCount + 1 +
        "of" + quizArray.length + "Question";
        quizDisplay(questionCount);
        count = 21;
        clearInterval(countdown);
        timerDisplay();
    }
})
);

const timerDisplay = () =>{
    countdown = setInterval (() => {
        count --;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
            
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");

    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater() {
    quizArray.sort(() => Math.random() -0.5);
    for(let i of quizArray){
        i.options.sort(()=> Math.random() -0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid","hide");

        countOfQuestion.innerHTML = 1 + "  of   " +
        quizArray.length + "  Question  ";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML +=`  
        <button class= "option-div" onclick="checker(this)">
        ${i.options[0]}</button>
        <button class= "option-div" onclick= "checker(this)">
        ${i.options[1]}</button>
        <button class= "option-div" onclick= "checker(this)">
        ${i.options[2]}</button>
        <button class= "option-div" onclick= "checker(this)">
        ${i.options[3]}</button>
        `;



       

        quizContainer.appendChild(div);
        
    }
}


function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")
    [questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    }else{
        userOption.classList.add("incorrect");

        options.forEach((element)=> {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
                
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount=0;
    count = 21;

    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);

}

startButton.addEventListener("click",() => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});



window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}
