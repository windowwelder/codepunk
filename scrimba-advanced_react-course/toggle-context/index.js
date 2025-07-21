import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs"
import Star from "./Star"
            
function App() {
  return (
    <>
      <Star />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
