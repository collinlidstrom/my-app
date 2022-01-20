import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Button, CustomProvider, ButtonToolbar } from "rsuite";
import Resume from "./components/Resume";
import "rsuite/dist/rsuite.min.css";

import "./App.css";

function App() {

  const [theme, setTheme] = useState('light');

  const switchTheme = e => setTheme(e.target.value);

  return (
    <CustomProvider theme={theme}>
      <div className="App">
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
          <br />
          <br />
          <Resume />
          <br />
          <Button>Submit</Button>
          <br />
          <br />
          <br />
      </div>
    </CustomProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;