import './App.css';
import Container from './components/Container'
import Output from './components/Output';
import {
  Route, 
  Switch,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Switch >
        <Route path="/option-a/output" component={Output} />
      <Route path="/option-a" exact component={Container} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
