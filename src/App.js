// dependencies
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import "./App.css";

import Header from "components/Header";
import Home from "components/Home";
import Dashboard from "components/Dashboard";
import Student from "components/Student";
import Parent from "components/Parent";
import Faculty from "components/Faculty";
import Aqi from "components/Aqi";
import Study from "components/Study";
import Test from "components/Test";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#800020",
      contrastText: "white"
    }
  }
});

const App = () => (
  <div className="App">
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/learn-more" component={Home} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/parent" component={Parent} />
          <Route exact path="/faculty" component={Faculty} />
          <Route exact path="/aqi" component={Aqi} />
          <Route exact path="/study" component={Study} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </div>
);

export default App;
