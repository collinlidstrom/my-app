import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import {
  CustomProvider,
  List,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import ListItem from "rsuite/esm/List/ListItem";

function App() {


  document.body.style = 'background: #d12f1d;';
  // Or with CSS
  document.body.classList.add('background-red');

  // const spinnerStyle = {
  //   paddingLeft: '40px',
  //   paddingTop: '40px',
  //   paddingRight: '40px'
  // }

  return (<CustomProvider theme={"dark"}>
    <div className="App">
      <br/>
      <Title />
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
