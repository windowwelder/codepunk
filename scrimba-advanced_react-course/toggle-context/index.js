import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs"
            
function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
              <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
              <BsStar className="star " />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>

            <Menu>
                <Menu.Button>"Menu"</Menu.Button>
                <Menu.Dropdown><Menu.Item>"options"</Menu.Item></Menu.Dropdown>
            </Menu>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
