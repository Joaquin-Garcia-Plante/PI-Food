import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={LandingPage}></Route>
          <Route path={"/home"} component={Home}></Route>
          <Route path="/recipes/:id" component={Detail}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
