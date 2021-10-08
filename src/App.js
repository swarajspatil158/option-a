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
        
      <Route path="/" exact component={Container} />
      <Route path="/output" component={Output} />
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
