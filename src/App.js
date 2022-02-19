import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import { FaSpinner } from 'react-icons/fa';
import {
  Button,
  CustomProvider,
  List,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import ListItem from "rsuite/esm/List/ListItem";

function App() {

  const [theme, setTheme] = useState('dark');
  const switchTheme = e => setTheme(e.target.value);

  document.body.style = 'background: #d12f1d;';
  // Or with CSS
  document.body.classList.add('background-red');

  const spinnerStyle = {
    paddingLeft: '40px',
    paddingTop: '40px',
    paddingRight: '40px'
  }

  return (<CustomProvider theme={theme}>
    <div className="App">
      <br/>
      <Title />
      <br/>
      <div className='container'>
        <List align='center'>
          <ListItem>
            Inventory Management (auto-order)
          </ListItem>
          <ListItem>
            Document Scanning
          </ListItem>
          <ListItem>
            Document Management
          </ListItem>
          <ListItem>
            Email Scanning
          </ListItem>
          <ListItem>
            Time Optimization
          </ListItem>
          <ListItem>
            Record Management
          </ListItem>
          <ListItem>
            Financial Forecasts
          </ListItem>
        </List>
      </div>
    </div>
  </CustomProvider>);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
