import { Link } from 'react-router-dom';
import './mystyls.css'
const MyNavBar = () => {
    return ( 
        <nav className="navbar" >
            <h1>Think Digitally</h1>
            <div className="links">
                
                <Link to="/Category"> Category Page</Link>
                <Link to="/login"> LogOut</Link>
                
            </div>
        </nav>
     );
}
 
export default MyNavBar;
