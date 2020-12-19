import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/signup";
import Success from "./components/Success/success";
import Pagenotfound from "./components/Pagenotfound/pagenotfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route path="*">
            <Pagenotfound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
