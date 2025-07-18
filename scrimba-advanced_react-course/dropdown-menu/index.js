import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./Menu/Menu";
import MenuButton from "./Menu/MenuButton";
import MenuDropdown from "./Menu/MenuDropdown";

function App() {
  const items={["Tennis", "Pickleball", "Racquetball", "Squash"]};
  function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
  return (
    <>
      <Menu>
        <MenuButton buttonText="Sports" onClick={toggle}/>
        <MenuDropdown items={items}/>
      </Menu>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
