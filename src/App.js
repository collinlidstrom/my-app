import React from "react";
import ReactDOM from "react-dom";
import Title from "./components/Title";
import ExportComponent from './components/ExportComponent';
import "bootstrap"
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
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Sail Demo</h5>
          <span className="text-muted">Providing small businesses with optimization solutions. We offer products and consulting for efficiency, time management and software solutions.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
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
