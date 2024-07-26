import logo from './logo.svg';
import './App.css';
import SignInSide from './SideSign';
import { BrowserRouter as router, Switch, Route, Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <SignInSide />
    </Router>
    
  );
}

export default App;
