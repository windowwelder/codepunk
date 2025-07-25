import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <header>
          <Link to="/">#VANLIFE</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);