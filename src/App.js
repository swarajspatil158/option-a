import './App.css';
import Container from './components/Container'
import Output from './components/Output';
import {
  HashRouter,
  Route, 
  Switch} from "react-router-dom";

function App() {

  return (
    <HashRouter>
    <div className="App">
      
      <Switch >
        <Route path="/option-a/output" component={Output} />
      <Route path="/option-a" exact component={Container} />
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
