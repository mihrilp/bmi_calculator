import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import DietList from "./pages/DietList";
import Result from "./pages/result/Result";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/diet-list">
            Diet List
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/diet-list" component={DietList} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
