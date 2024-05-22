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
    question: " ¿Por qué es importante la seguridad en la navegación internacional según la Regla ",
    options: [
        "Porque permite la competencia entre las embarcaciones.",
        "Porque garantiza la aplicación uniforme de las leyes marítimas en todo el mundo",
        "Porque la seguridad es un principio rector y vital para prevenir abordajes y accidentes en el mar",
        "NINGUNA DE LAS ANTERIORES",
    ],
    correct: "Porque la seguridad es un principio rector y vital para prevenir abordajes y accidentes en el mar"
},

{
    id:"1",
    question: "¿Qué sucede si una embarcación no cumple con la Regla 1 del RIPA?",
    options: [
        "Se le otorga una bonificación en el puerto de llegada",
        "Puede enfrentar sanciones, multas o incluso la detención de la embarcación.",
        "No ocurre nada, ya que la Regla 1 es meramente informativa",
        "NINGUNA DE LAS ANTERIORES",

    ],
    correct: "Puede enfrentar sanciones, multas o incluso la detención de la embarcación."
},
{
    id: "2",
    question: "¿ A qué tipos de aguas se aplica el reglamento para prevenir abordajes en el mar",
    options: [
        "Solo en alta mar",
        "solo en aguas territoriales de cada pais",
        "A todas las aguas que tengan comunicacion con alta mar y sean navegables por los buques de navegacion maritima",
        "A ríos y lagos sin conexión con el mar",

    ],
    correct: "A todas las aguas que tengan comunicacion con alta mar y sean navegables por los buques de navegacion maritima",

},

{
    id:"3",
    question: "Que sucede si hay reglas especiales establecidas por la autoridad completamente para, puertos, rios, lagos o aguas interiores",
    options: [
        "Se debe ignorar el Reglamento para Prevenir Abordajes",
        "Estas reglas especiales deben coincidir en todo lo posible con lo dispuesto en el Reglamento para Prevenir Abordajes ",
        "Se aplica solo si son más estrictas que el Reglamento para Prevenir Abordajes",
        "No se pueden aplicar en presencia del Reglamento para Prevenir Abordajes",

    ],
    correct: "Estas reglas especiales deben coincidir en todo lo posible con lo dispuesto en el Reglamento para Prevenir Abordajes"
},


{
    id:"4",
    question: "¿Que autoridades puede establecer reglas especiales para, puertos, rios, lagos o aguas interiores",
    options: [
        "Solo la Organizacion Maritima Internacional",
        "La autoridad competente local",
        "La guardia costera de cada país",
        "Solo los gobiernos nacionales",

    ],
    correct: "La autoridad competente local"
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
