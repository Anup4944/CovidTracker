import "./App.css";
import Covid from "./components/Covid";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./components/Countries";

function App() {
  return (
    <>
      <div className="App">
        <Covid />
        <Countries />
      </div>
      ;
    </>
  );
}

export default App;
