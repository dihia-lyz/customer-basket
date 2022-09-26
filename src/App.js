import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import HomePage from './views/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
         <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
