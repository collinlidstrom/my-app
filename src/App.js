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

  return (<CustomProvider theme={"light"}>
    <div className="App">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          {/* <h5 className="text-white h4">Sail Demo</h5> */}
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
      <div className='container'>
        <br />
          <h1 >
            Sail
          </h1>
        <br />
        <br />
        <div className="col d-flex justify-content-center">
          <form>
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" for="form2Example1">Email address</label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" />
              <label className="form-label" for="form2Example2">Password</label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                  <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div hidden>
        <Title />
        <ExportComponent />
      </div>
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
