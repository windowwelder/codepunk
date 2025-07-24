import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu"
import MenuButton from "./Menu/MenuButton"
import MenuDropdown from "./Menu/MenuDropdown"

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  
  const sportItems = sports.map( sport => <MenuItem>{sport}</MenuItem> );
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>{ sportItems }</MenuDropdown>
    </Menu>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);