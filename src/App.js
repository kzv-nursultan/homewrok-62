import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/orders' component={Orders}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
