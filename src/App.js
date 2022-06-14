// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/textform";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
    setmode('dark')
    document.body.style.backgroundColor = '#072a5d';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtils - Dark mode';
  }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
      document.title = 'TextUtils - Light mode';

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="DESAI" abouttext="Rajapuri" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <Textform showAlert={showAlert} heading="Enter the caption" mode={mode}/>
          {/* </Route>
      </Switch> */}
      </div>
    {/* </Router>  */}
    </>
  );
}

export default App;
