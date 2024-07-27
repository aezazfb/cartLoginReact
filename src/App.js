import logo from './logo.svg';
import './App.css';
import SignInSide from './SideSign';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryPage from './CategoryForm';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
        
        <Route path='/login'element={<SignInSide />}/>
        <Route path='/category'element={<CategoryPage />}/>

      </Routes>
      </div>
      
      
    </Router>
    
  );
}

export default App;
