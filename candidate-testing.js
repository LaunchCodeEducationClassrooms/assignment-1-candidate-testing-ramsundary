const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = '';

let correctAnswer = '';
let candidateAnswer = '';

let questions = ['Who was the first American woman in space?','True or false: 5000 meters = 5 kilometers.','(5 + 3)/2 * 10 = ?',"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",'What is the minimum crew size for the ISS?'];

let correctAnswers = ['Sally Ride','True',40,'Trajectory',3];

let candidateAnswers = []; 

let noofcorrectAnswers = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter Name: ")
  console.log('Candidate Name: ' + candidateName);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0; i < questions.length; i++){
  console.log(i+1 + ') ' + questions[i]);
  candidateAnswer = input.question('Your Answer: ');
  
  candidateAnswers.push(candidateAnswer.toUpperCase());
  
  console.log("Correct Ansawer: " + correctAnswers[i] ); 
  console.log(" "); 
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let grade = 0;
  
  for(let j=0; j < questions.length; j++){
    correctAnswer = String(correctAnswers[j]);
    
    if (correctAnswer.toUpperCase() == 
          candidateAnswers[j]){
      
      noofcorrectAnswers = noofcorrectAnswers + 1;
      
    } 
  }
  
  grade =  noofcorrectAnswers / questions.length * 100
  //console.log('grade:' + grade);

  console.log('>>> Overall Grade: ' + grade + '% (' + noofcorrectAnswers + ' of ' + questions.length + ' responses correct) <<<')

  if (grade > 70){
    console.log('>>> Status: PASS <<<')
  } else {
    console.log('>>> Status: FAILED <<<');
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};