// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react'
import About from './components/About';

import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";

function App() {
  const [mode,SetMode]=useState('light');
  const [alert,SetAlert]=useState(null);
  const showAlert =(message,type)=>{
      SetAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        SetAlert(null);
      }, 3000);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor='#383a3c';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been enabled","success");
    }
  }
  // Writing JSX
  return (
<>
  <Router>
  <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode}></Navbar>
  <Alert alert={alert}/>
  {/* my-3 Margin in y axis */}
  <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<Textform heading="Try TextUtils- Space Remover, Uppercase to Lowercase, Lowercase to Uppercase, Word Counter, Character Counter" mode={mode} showAlert={showAlert}/>}></Route>
  </Routes>
  </Router>
</>
  );
}

export default App;
