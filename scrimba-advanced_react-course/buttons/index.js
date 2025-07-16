import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <main>
      <Button size="lg">
        <FcGoogle />
        Log in with Goggle
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);