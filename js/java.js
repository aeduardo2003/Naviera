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
    question: "De que habla la parte B del reglamento para prevenir abordaje? ",
    options: [
        "LUCES Y MARCAS",
        "GENERALIDADES",
        "REGLA DE RUMBO Y GOBIERNO",
        "TODAS LAS ANTERIORES",

    ],
    correct: "REGLA DE RUMBO Y GOBIERNO"
},

{
    id:"1",
    question: "LAS REGLAS DE RUMBO Y GOBIERNO VA DE LA REGLA ___ A LA REGLA___?",
    options: [
        "4 Y 18",
        "18 Y 32",
        "2 Y 4",
        "NINGUNA DE LAS ANTERIORES",

    ],
    correct: "4 Y 18"
},
{
    id: "2",
    question: "EN LA SITUACION DE VUELTA ENCONTRADA HACIA DONDE DEBEN GIRAR LOS BUQUES PARA EVITAR UN ABORDAJE",
    options: [
        "LADO DERECHO (ESTRIBOR)",
        "LADO IZQUIERDO (BABOR)",
        "LADO DERECHO E IZQUIERDO",
        "TODAS LAS ANTERIORES",

    ],
    correct: "LADO DERECHO (ESTRIBOR)",

},

{
    id:"3",
    question: "QUE DEBEN HACER LOS BUQUES AL NAVEGAR EN UN CANAL ANGOSTO SEGUN EL REGLAMANETO PARA PREVENIR ABORDAJE",
    options: [
        "MANTENERSE EN EL CENTRO DEL CANAL",
        "MANTENERSE LO MAS CERCA POSIBLE DEL LIMITE EXTERIOR DEL CANAL QUE QUEDE POR SU COSTADO DERECHO (ESTRIBOR) ",
        "MANTENERSE LO MAS CERCA POSIBLE DEL LIMITE EXTERIOR DEL CANAL QUE QUEDE POR SU COSTADO IZQUIERDO (BABOR)",
        "CAMBIAR DE LADO CONSTANTEMENTE PARA EVITAR COLISIONES",

    ],
    correct: "MANTENERSE LO MAS CERCA POSIBLE DEL LIMITE EXTERIOR DEL CANAL QUE QUEDE POR SU COSTADO DERECHO (ESTRIBOR)"
},


{
    id:"4",
    question: "CUAL ES EL PROCEDIMIENTO ADECUADO PARA UN BUQUE QUE DEBE CEDER EL PASO EN UN ENCUENTRO CON OTRO BUQUE ?",
    options: [
        "DESVIAR SU RUMBO SOLO SI EL OTRO BUQUE LO SOLICITA",
        "REDUCIR LA VELOCIDAD Y ESPERAR INSTRUCCIONES DEL OTRO BUQUE",
        "SEGUIR SU CURSO Y VELOCIDAD SIN CAMBIOS",
        "SONAR LA BOCINA Y ESPERAR A QUE EL OTRO BUQUE PASE",

    ],
    correct: "REDUCIR LA VELOCIDAD Y ESPERAR INSTRUCCIONES DEL OTRO BUQUE"
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
