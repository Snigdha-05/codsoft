const quizData = [{
    question: "How can a datatype be declared to be a constant type?",
    a: "Const",
    b: "Var",
    c: "Let",
    d: "Constant",
    correct: "a"
},
{
    question: "Which one is the first fully supported 64-bit Operating System?",
    a: "Windows Vista",
    b: "Linux",
    c: "Mac",
    d: "Windows XP",
    correct: "b"
},
{
    question: "In Computer World Trojan refers to?",
    a: "Virus",
    b: "Worm",
    c: "Spyware",
    d: "Malware",
    correct: "c",
},
{
    question: "Which Protocol is used to receive E-mail?",
    a: "SMPT",
    b: "POP3",
    c: "HTTP",
    d: "FTP",
    correct: "b",
},
];




const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const totalNumberofQuestion = document.getElementById("tol-num-que");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLable = document.querySelectorAll(".answer-lable");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitQuiz = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");


let currentQtn = 0;
let answerd = 0;

const loadQuiz = () => {
    countQuestion.innerHTML = `${currentQtn + 1}`;
    totalNumberofQuestion.innerHTML = quizData.length;
    questionNumber.innerHTML = `${currentQtn + 1}`;
    questionTitle.innerHTML = quizData[currentQtn].question;
    answerLable[0].innerHTML = quizData[currentQtn].a;
    answerLable[1].innerHTML = quizData[currentQtn].b;
    answerLable[2].innerHTML = quizData[currentQtn].c;
    answerLable[3].innerHTML = quizData[currentQtn].d;

    reset();

    if(currentQtn ==quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitQuiz.style.display="block";
    }
}
const reset = () => {
    allInputs.forEach((allInputs) => {
        allInputs.checked = false;
    })
}

nextQuestionbtn.addEventListener("click", () =>{
    let answer = getselected();
        if (answer){
            if (answer == quizData[currentQtn].correct) {
                answerd++;
            }
            currentQtn++;
            if (currentQtn < quizData.length) {
                loadQuiz();
            }
        }

    });

    submitQuiz.addEventListener("click", ()=>{
        let answer =getselected();
        if(answer === quizData[currentQtn].correct){
            answerd++;
        };
        currentQtn++;
        if(getselected()){
            quiz.style.display="none";
            resultEl.style.display="block";
            scoreEl.innerHTML=`Questions Answered Correctly ${answerd} / ${quizData.length}`;
        }


    })

const getselected = () => {
    let answer;
    allInputs.forEach((allInputs) => {
        if (allInputs.checked) {
            answer = allInputs.value;
        }
    });
    return answer;
}
loadQuiz();


