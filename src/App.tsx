import Header from './components/header';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import HomePage from './components/home-page';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path={`/covid-tracker-app/home`} component={HomePage}></Route>
          <Route  path="/" render={() => <Redirect to={`/covid-tracker-app/home`}/>}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
