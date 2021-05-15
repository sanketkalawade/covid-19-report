import Header from './components/header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact={true} path="/home-page"><div>HOME PAGE</div></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
