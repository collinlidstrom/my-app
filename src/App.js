import React from "react";
import {useState} from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import {FaSpinner} from 'react-icons/fa';
import {
  Button,
  CustomProvider,
  ButtonToolbar,
  Sidenav,
  Nav,
  Dropdown
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./App.css";

function App() {

  const [theme, setTheme] = useState('dark');
  const switchTheme = e => setTheme(e.target.value);

  const spinnerStyle = {
    paddingLeft: '40px',
    paddingTop: '40px',
    paddingRight: '40px'
  }

  return (<CustomProvider theme={theme}>
    <div className="App">
      <br/>
      <div style={spinnerStyle} align='left'>
        <Title/>
      </div>
      <br/>
      <div style={spinnerStyle} align='left'>
        <FaSpinner icon="spinner" className='spinner'/>
      </div>
      <div hidden="hidden">
        <ButtonToolbar>
          <Button appearance="default" onClick={switchTheme} value="light">
            Light
          </Button>
          <Button appearance="primary" onClick={switchTheme} value="dark">
            Dark
          </Button>
          <Button appearance="ghost" onClick={switchTheme} value="high-contrast">
            Contrast
          </Button>
        </ButtonToolbar>
      </div>
    </div>
  </CustomProvider>);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

export default App;
