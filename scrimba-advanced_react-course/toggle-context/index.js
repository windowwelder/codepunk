import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
            
function App() {
  return (
    <>
      <Star onChange={ () => console.log("Hot damn!")}/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
