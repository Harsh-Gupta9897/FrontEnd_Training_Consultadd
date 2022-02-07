import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import BookDetails from './components/BookDetails';
import ShowBook from './components/ShowBook';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/bookDetails" component={BookDetails}></Route>
        <Route exact path="/bookDetails/:id" component={ShowBook}></Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
