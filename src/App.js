import React from "react";
import Trial from "./Trial"
function App() {
  return (
   <div maxWidth="500px ">
    <h1>TensorFlow.js toxicity classifier demo</h1>
    <p>This is a demo of the TensorFlow.js toxicity model, which classifies text according to whether it exhibits offensive attributes (i.e. profanity, sexual explicitness). 
      The samples in the table below were taken from this <a href="#"> Kaggle dataset.</a></p>
     <Trial/>
     

   </div>  
    
  )
}

export default App;
