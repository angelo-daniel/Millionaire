import { useEffect, useState } from 'react'
import './App.css'
import './Game.css'

function App() {
  const [gameStart, isGameStart] = useState(false);
  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [nameValue2, setNameValue2] = useState("");
  const [mode, whatMode] = useState(1);
  const [timeLeft, setTimeLeft] = useState(45);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [answerResult, setAnswerResult] = useState(null);
  
    const easyQuestions = [{
    id: "1",
    question: "🐞How Many Legs does a spider have? ",
    answers: ["Four(4)", "Eight(8)", "Two(2)", "Nine(9)"],
    correctAnswer: "Eight(8)"
    }, 
    {
      id: "2",
      question: "🏛What is the capital of the Philippines? ",
      answers: ["Paris", "Pyongyang", "Shenzen", "Manila"],
      correctAnswer: "Manila"
    },
    {
      id: "3", 
      question: "💧What is the chemical symbol for water?",
      answers: ["H2O", "K", "Au", "He"],
      correctAnswer: "H2O"
    }, 
    {
      id: "4", 
      question: "🧾How many letters are in the alphabet?",
      answers: ["27", "28", "22", "26"],
      correctAnswer: "26"
    }, 
    {
      id: "5",
      question: "📏How many inches are in a foot?",
      answers: ["14", "13", "12", "11"],
      correctAnswer: "12"
    }, 
    {
      id: "6",
      question: "🌏What is the only planet in our solar system to rotate clockwise on its axis?",
      answers: ["Venus", "Earth", "Mars", "Jupiter"],
      correctAnswer: "Venus"
    }, 
    {
      id: "7",
      question: "🌞What occasion corresponds with the longest day of the year?",
      answers: ["Winter Solstice", "Spring Equinox", "Autumnal Equinox", "Summer Solstice"],
      correctAnswer: "Summer Solstice"
    },
    {
      id: "8",
      question: "🔍What was Mac's first web browser?",
      answers: ["Samba", "Safari", "Firefox", "Opera"],
      correctAnswer: "Samba"
    },
    {
      id: "9",
      question: "🆕Now known as “Meta,” Facebook was originally named what?",
      answers: ["MySpace", "Friendster", "ASN", "Facebook" ],
      correctAnswer: "Facebook"
    },
    {
      id: "10",
      question: "⚽Where did the 2000 Summer Olympics take place? ",
      answers: ["New York City, USA ", "Sardinia, Italy", "Sydney, Australia", "Paris, France"],
      correctAnswer: "Sydney, Australia"
    }, 
    {
      id: "11",
      question: "🏒Which Canadian hockey player is considered to be the greatest of all time? ",
      answers: ["Lebron James", "Usain Bolt", "Wayne Gretzky", "Michael Phelps"],
      correctAnswer: "Wayne Gretzky"
    },
    {
      id: "12",
      question: "🍔“Have it your way” is the memorable slogan of what fast food restaurant?",
      answers: ["Burger King", "McDonalds", "Shakeys", "Chuck-e-Cheese"],
      correctAnswer: "Burger King"
    }, 
    {
      id: "13",
      question: "🎤Who was the first “American Idol” winner?",
      answers: ["David Cook", "Carrie Underwood", "Ruben Studdard", "Kelly Clarkson"],
      correctAnswer: "Kelly Clarkson"
    },
    ]
  

  const [data, setData] = useState(easyQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = data[currentQuestionIndex];
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Selection, setPlayer1Selection] = useState(null);  
  //FOR MULTIPLAYER
  const [player1hasSelected, setPlayer1hasSelected] = useState(false);
  const [player2hasSelected, setPlayer2hasSelected] = useState(false);
  const [questionResults, setQuestionResults] = useState({});
  const [gameEnded, setGameEnded] = useState(false);
  const maxIndex = 12;
  const [playerConfirm, setPlayerConfirm] = useState(false);
  const [winnings, setWinnings] =  useState(0);

  const modeSelect1 =()=>{
    whatMode(1);
  }
  const modeSelect2 =()=>{
    whatMode(2);
  }

  const startGame =()=> {
    setTimerIsActive(true);

    if(mode == 1) {
      if(nameValue.trim().length === 0 ) {
      setUsername("Guest#3456")
    }
    else if(nameValue.length > 13) {
      alert("Name cannot exceed 13 characters :)")
      setNameValue("")
    }
    else {
      setUsername(nameValue)
    }
  }
    
  if(mode == 2) {
    if(nameValue.length === 0) {
      
      setUsername("Player1")
    }
    else if(nameValue.length > 13 || nameValue2 > 13) {
      alert("Name cannot exceed 13 characters :)")
      setNameValue("")
    }
    else {
      
      setUsername(nameValue)
    }

    if(nameValue2.length === 0) {
      
      setUsername2("Player 2")
    }
    else{
      setUsername2(nameValue2)
    }
    }
    isGameStart(true);
    
  }
  
  const handleAnswers =()=> {
    const isCorrect = player1Selection === currentQuestion.correctAnswer;
      
      setPlayer1Score(prev => isCorrect ?  prev + 1 : prev);

      setQuestionResults(prev=>({
        ...prev, [currentQuestionIndex]: isCorrect ? 'correct-answer' : 'incorrect-answer'
      }))

      if(isCorrect){
        setAnswerResult(true);

          if((currentQuestionIndex+1) <= 5) {
            setWinnings(prev => prev + 200 * (currentQuestionIndex+1));
          }
          else if ((currentQuestionIndex+1) > 5 && currentQuestionIndex <= 10) {
            setWinnings(prev => prev + 400 * (currentQuestionIndex+1));
          }
          else if ((currentQuestionIndex+1) > 10 && currentQuestionIndex < 12){
            setWinnings(prev => prev + 800 * (currentQuestionIndex+1));
          }else {
            setWinnings(prev => prev + 1600 * (currentQuestionIndex+1));
          }

      }else {
        setAnswerResult(false);
      }

      setTimerIsActive(false);
      setPlayerConfirm(true);
      setPlayer1hasSelected(false);
      

      setTimeout(() => {

        setPlayer1Selection(null);
        setAnswerResult(null);
        setPlayerConfirm(false);
        setTimeLeft(45);
        setTimerIsActive(true);

        const nextIndex = currentQuestionIndex + 1;
        if(nextIndex > maxIndex) {
          setGameEnded(true)
          setTimerIsActive(false);
        }

        else {
          setCurrentQuestionIndex(nextIndex);
        }
      }, 1500)
  }
  
  useEffect(()=>{
    if (answerResult !== null ) {
     
    }
  }, [answerResult])

  useEffect(() => {
  if (!timerIsActive || timeLeft === 0)return;

  const timer = setInterval(() => {
    setTimeLeft(prev => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
  }, [timerIsActive, timeLeft]);

  const getTimerColor =()=> {
    if (timeLeft <= 15 ) return '#ef5350';
    
  }

  useEffect(() => {
    if(timerIsActive !== null){
      console.log(timerIsActive);
    }
  }, [timerIsActive]);

  useEffect(()=>{
    if(timerIsActive && timeLeft === 0) {
      setGameEnded(true);
      setTimerIsActive(false);
      console.log("Timer us UP!");
    }
  })

  const replay =()=>{
    setGameEnded(false);
    setCurrentQuestionIndex(0);
    setTimerIsActive(true);
    setTimeLeft(45);
  }
  
  return (
    <>
    <div className='app-container'>
      <div className='top-bar' >
          {gameStart ? (

            <>
              {mode === 1 && (
                <>
                <div className='top-bar-left'>
                  <h2>Who Wants To Be A Millionaire😎</h2>
                </div><div className='top-bar-right'>
                    <h3>Welcome {username} 😃</h3>
                  </div>
                  </>
              )
              }

              {mode === 2 && (
                <>
                <div className='top-bar-left'>
                  <h2>Who Wants To Be A Millionaire😎</h2>
                </div><div className='top-bar-right'>
                    <h3>Welcome Players:  {username}* 😃, {username2}* 😃</h3>
                  </div>
                </>
              )}
            
            </>
          ) : (
            <h1></h1>
          )}
            
      </div>

      <div id="main-content">
        
        {gameStart ? (

          <>
           {mode === 1 && (
            <>
              <div className='left-panel-1pmode'>
                <div className='difficulty-text'>
                      <ul className='styled-list'>
                        {easyQuestions.map((q, index) => 
                          <li key={q.id}
                              className={currentQuestionIndex === index ? "active-question" : 
                                questionResults[index] === 'correct-answer' ? "correct-question" :
                                questionResults[index] === 'incorrect-answer' ? "incorrect-question" :
                                "" }
                              >
                                Question {index + 1}
                              </li>
                        )}  
                      </ul>
                </div>
              </div>

              <div className='right-panel-1pmode'>
                  <div className="question-flashcard">
                      <>
                        <div className='timer' hidden ={gameEnded}>
                          <h2 style={{color: getTimerColor()}}>
                            {timeLeft}
                          </h2>
                        </div>
                        
                      {gameEnded ? (
                        <>
                          <div style={{fontSize:'120%'}}>
                            <p>GAME HAS ENDED</p>
                            <p>YOUR SCORE IS:  {player1Score}  /  {maxIndex+1}</p>
                            <p>YOU WON: ₱ {winnings}.00</p>
                            <button onClick={replay} className='replay-button'>🔈REPLAY</button>
                          </div>
                        </>) :
                        currentQuestion ? 
                        (
                          <>
                          <p>{currentQuestion.question}</p>
                          {answerResult !==null && (
                            <p className={`answer-result ${answerResult ? 'correct' : "incorrect"}`}>
                            {answerResult? "Correct✔" : "Incorrect❌"}
                            </p>
                          )}
                          </>
                        ) : "Loading..."}
                        
                      </>
                  </div>

                  {!gameEnded && (
                    <div className='answers-container'>   
                    
                    {currentQuestion.answers.map((answer, index) => 
                    <div key ={index} className={`answer-flashcard
                      ${player1Selection === answer ? 'selected-answer' : ""}`
                      }
                        
                        onClick={()=>{
                          console.log("Answer: ", answer);
                          setPlayer1Selection(answer); 
                          setPlayer1hasSelected(true);
                        }}
                        >
                      {answer}
                      </div> )}
                        <button disabled={!player1hasSelected || playerConfirm}
                                className='confirm-button'
                                onClick={handleAnswers}>Confirm
                                </button> 
                    </div>
                  )}  
                  
                  <div className='scoreboard'>
                    <h1>SCORE : {player1Score} | Winnings: ₱{winnings}.00</h1>
                  </div>
              </div>
            </>
           ) }

           {mode === 2 && (
            <>
            <h1>THIS IS PLAYER 2 MODE, Players:  {username}, {username2}</h1></>
           )}
          
          </>

        ): (
          <div className="main-div">
            
            <br></br>
            <div className='nostart-div'>
              <h1>WHO WANTS TO BE A MILLIONAIRE💸</h1>
              <h2>GAME MODE 🎮</h2>
              <button disabled={mode==1} 
              onClick={modeSelect1} 
              autoFocus={mode==1}
              className="spModeButton">
                🔈SINGLE PLAYER
                </button>

              <button style={{marginLeft:'10px'}} 
              disabled={mode==2} 
              onClick={modeSelect2} 
              className="compModeButton">
                🔈COMPETITIVE
                </button>
            
            <h2>What is your name?</h2>
            <div className='name-inputs-container'>
              <input type="text" 
              placeholder='Player 1'
              className='name-input1'
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              autoFocus
             />
              
             <input type="text" 
              placeholder='Player 2'
              className='name-input2'
              value={nameValue2}
              onChange={(e) => setNameValue2(e.target.value)}
              autoFocus
              hidden={mode != 2}
             />

            </div>
            <button className='start-button' onClick={startGame}>
                START THE GAME
            </button>
            </div>
                
          </div> 
        )}
      </div>
        
      </div>

      <div className='footer'>
          <h5>© Daniel, Angelo BSIT - 4 </h5>
      </div>
    </>
    
  )
}

export default App
