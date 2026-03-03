import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FetchButton from "./components/FetchButton";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Здесь вы можете узнать факты о котах</h1>
      <FetchButton />
    </div>
  );
}

export default App;
