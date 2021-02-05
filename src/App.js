import "./App.css";
import { Route } from "react-router-dom";
import CarsList from "./components/CarsList";
import CarPage from "./components/CarPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CarsList} />
      <Route exact path="/:id" component={CarPage} />
    </div>
  );
}

export default App;
