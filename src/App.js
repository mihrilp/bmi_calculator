import "./App.css";
import "./components/BMICalculate";
import BMICalculate from "./components/BMICalculate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="bmi2.png" alt="bmi" width="150" height="150" />
        <h2>CALCULATOR</h2>
      </header>
      <main>
        <BMICalculate />
      </main>
    </div>
  );
}

export default App;
