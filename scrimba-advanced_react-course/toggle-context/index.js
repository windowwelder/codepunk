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

      <Toggle>
            <Menu>
              <Toggle.Button>
                <Toggle.On>
                  <Menu.Button>"Click me"</Menu.Button>
                  <Menu.Dropdown><Menu.Item>"option"</Menu.Item></Menu.Dropdown>
                </Toggle.On>
              </Toggle.Button>
            </Menu>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
