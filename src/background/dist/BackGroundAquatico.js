import React from 'react'
import './style.css'
import './BackGroundAquatico.css'
import { ObjectQuiz } from '../../objectQuiz/ObjectQuiz'
const Background = () => {
  return (
    <div className="wrapper">
     <h1 className="rectangle">
  
        <h4 className='start'>  Inicio do Quiz </h4>
        <img className='gifContainer'
     src="https://i.pinimg.com/originals/2a/4a/a4/2a4aa468c2b2c418b9c55deb840d6ee9.gif"
     alt="GIF animado"/>
    
     <h3 className='TituloDaPergunta'>{ObjectQuiz[0].question} </h3>
   
    <span className='container'>
 
     {ObjectQuiz[1].options.map((opcoes,key)=> (
      <p key = {key}>
      {console.log(opcoes)}
      <button className='butonOptions'>{opcoes.option}</button>
    </p> 

     ))}
    
    </span>

     </h1>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
    </div>

  )
}

export default Background