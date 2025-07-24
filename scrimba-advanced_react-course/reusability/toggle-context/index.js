import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./dropdown-menu/Menu/index"
import Star from "./Star"
            
function App() {
  const showBox = (on) => on ? <div className="box filled"></div> : <div className="box"></div>;
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>{showBox}</Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
