import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GetContact } from "./Components/GetContact";
import { GetUniqueContact } from "./Components/GetUniqueContact";
import { AddContact } from "./Components/AddContact";
import { DeleteContact } from "./Components/DeleteContact";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/getContact" component={GetContact} />
        <Route exact path="/getUniqueContact" component={GetUniqueContact} />
        <Route exact path="/addContact" component={AddContact} />
        <Route exact path="/deleteContact" component={DeleteContact} />
      </Router>
    </div>
  );
}

export default App;
