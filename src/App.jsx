import { useState } from 'react'
import './App.css'

function App() {
  const [gameStart, isGameStart] = useState(false);
  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [nameValue2, setNameValue2] = useState("");
  const [mode, whatMode] = useState(1);
  const [difficulty, setDifficulty] = useState(1);
  
  


  const easyQuestions = [{
    id: "1",
    question: "How Many Legs does a spider have? 🐞",
    answers: ["Four(4)", "Eight(8)", "Two(2)", "Nine(9)"],
    correctAnswer: "Eight(8)"
    }, 
    {
      id: "2",
      question: "What is the capital of the Philippines? 🏙",
      answers: ["Paris", "Pyongyang", "Shenzen", "Manila"],
      correctAnswer: "Manila"
    }]
  

  const [data, setData] = useState(easyQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = data[currentQuestionIndex];

  const modeSelect1 =()=>{
    whatMode(1);
  }
  const modeSelect2 =()=>{
    whatMode(2);
  }

  const startGame =()=> {
    if(mode == 1) {
      if(nameValue.length === 0 ) {
      isGameStart(true)
      setUsername("Guest#3456")
    }
    else if(nameValue.length > 13) {
      alert("Name cannot exceed 13 characters :)")
      setNameValue("")
    }
    else {
      isGameStart(true);
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
  isGameStart(true);
    }
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
                      <h5>Easy</h5>
                      <ul className='styled-list'>
                        {easyQuestions.map((q, index) => 
                          <li key={q.id}
                              className={currentQuestionIndex === index ? "active-question" : ""}
                              >
                                Question {index + 1}
                              </li>
                        )}  
                      </ul>
                      <h5>Medium</h5>
                        <ul className='styled-list'>
                        <li>Question 6</li>
                        <li>Question 7</li>
                        <li>Question 8</li>
                        <li>Question 9</li>
                      </ul>
                      <h5>Hard</h5>
                        <ul className='styled-list'>
                        <li>Question 10</li>
                        <li>Question 11</li>
                        <li>Question 12</li>
                      </ul>
                  </div>
              </div>

              <div className='right-panel-1pmode'>
                  <div className="question-flashcard">
                      <>
                        {currentQuestion ? currentQuestion.question : "Loading..."}
                      </>
                  </div>

                  <div className='answers-container'>
                    {currentQuestion.answers.map((answer, index) => 
                    <div key ={index} className="answer-flashcard">
                      {answer}
                      </div> )}
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
              <h1>WHO WANTS TO BE A MILLIONAIRE</h1>
              <h2>GAME MODE</h2>
              <button disabled={mode==1} 
              onClick={modeSelect1} 
              autoFocus={mode==1}
              className="spModeButton">
                SINGLE PLAYER
                </button>

              <button style={{marginLeft:'10px'}} 
              disabled={mode==2} 
              onClick={modeSelect2} 
              className="compModeButton">
                COMPETITIVE
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
          <h5>Copyright Daniel, Angelo BSIT - 4 </h5>
      </div>
    </>
    
  )
}

export default App
