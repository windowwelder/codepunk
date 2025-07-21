import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./dropdown-menu/Menu/index"
import Star from "./Star"
            
function App() {
  return (
    <>
      <Star onChange={ () => console.log("Hot damn!")}/>

      <Menu onOpen={ () => console.log("Goddamnit!")}>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>Blog</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
