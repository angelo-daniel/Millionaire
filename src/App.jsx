import { useState } from 'react'
import './App.css'

function App() {
  const [gameStart, isGameStart] = useState(false);
  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [nameValue2, setNameValue2] = useState("");
  const [mode, whatMode] = useState(1);


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
    else if(nameValue.length > 25) {
      alert("Name cannot exceed 25 characters :)")
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

          <div>
           {mode === 1 && (
            <>
            
            
            <div className='flashcard' >
              <h3>Question 1:</h3>

            </div>
            </>
           ) }

           {mode === 2 && (
            <>
            <h1>THIS IS PLAYER 2 MODE, Players:  {username}, {username2}</h1></>
           )}
          </div>


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
