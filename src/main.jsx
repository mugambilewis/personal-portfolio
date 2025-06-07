
import React from "react";
import ReactDOM from "react-dom/client";
import CursorEffects from "./CursorEffects";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode className="relative z-0">
    <ThemeProvider>
      <CursorEffects />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
