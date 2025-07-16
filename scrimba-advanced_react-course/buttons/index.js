import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <main>
      <Button style={{color: "green"}} onClick={() => console.log("Logging in...")}>
        <FcGoogle />
        Log in with Goggle
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);