import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MenuDropdown from "./Menu/MenuDropdown";

function App() {
  const items={["Tennis", "Pickleball", "Racquetball", "Squash"]};
  return (
    <>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown items={items}/>
      </Menu>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
