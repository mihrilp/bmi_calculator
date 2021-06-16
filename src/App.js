import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import DietList from "./pages/DietList";
import Result from "./pages/result/Result";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
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
