import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import ExportComponent from './components/ExportComponent';
import {
  CustomProvider,
  Footer,
  List,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./App.css";
import ListItem from "rsuite/esm/List/ListItem";

function App() {


  document.body.style = 'background: ##17A589';
  // Or with CSS
  // document.body.classList.add('background-red');

  // const spinnerStyle = {
  //   paddingLeft: '40px',
  //   paddingTop: '40px',
  //   paddingRight: '40px'
  // }

  return (<CustomProvider theme={"dark"}>
    <div className="App">
      <br />
      <Title />
      <ExportComponent />
      <Footer>
        <div hidden>
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
      </Footer>
    </div>
  </CustomProvider>);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
