import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <div>
            <div class="topnav">
                <Link to='/' className='nav'><li>Home</li></Link>
                <Link to='/about' className='nav'><li>About</li></Link>
                <Link to='/bookDetails' className='nav'><li>Show Book Details</li></Link>
                
                
            </div>
        </div>
     );
}
 
export default NavBar;