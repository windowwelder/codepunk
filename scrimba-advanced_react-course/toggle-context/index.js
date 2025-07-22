import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./dropdown-menu/Menu/index"
import Star from "./Star"
            
function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <div className="box filled"></div>
          </Toggle.On>
          <Toggle.Off>
            <div className="box"></div>
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
