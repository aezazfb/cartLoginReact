import logo from './logo.svg';
import './App.css';
import SignInSide from './SideSign';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoryPage from './CategoryForm';
import PrivateRoute from './PrivateRoute';
import FileUpload from './FileDownload';
import NotificationComponent from './NotificationTemplate';

function App() {
  return (
    <Router>
      <div className='App'>
        <NotificationComponent />
      <Routes>
        
        <Route path='/login'element={<SignInSide />}/>
        <Route path='/category'element={<CategoryPage />}/>
        <Route path='/downloads'element={<FileUpload />}/>

      </Routes>
      </div>
      
      
    </Router>
    
  );
}

export default App;
