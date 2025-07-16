import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa";

function App() {
  return (
    <main>
      <Button>
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);