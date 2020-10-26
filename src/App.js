import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/layout/header";
import HomePage from "./components/pages";
import Footer from "./components/layout/footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
