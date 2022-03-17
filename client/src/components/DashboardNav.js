import {Link} from 'react-router-dom';
import Navlogout from './Navlogout';
import { useSelector,} from 'react-redux';
// import TopNav from './TopNav';

const DashboardNav = () => {
    const active = window.location.pathname;
    const { auth } = useSelector((state) => ({ ...state }));
    // console.log(active);
    return(
        <ul className='nav nav-tabs '>
            <li className="nav-item desh">
                <Link className={`btn btn-info bg ${active === '/dashboard' && "active"}`} to="/dashboard">Profile</Link>
            </li>
            
            <li className="nav-item pull-left">
                <Link className={`btn btn-info bg ${active === '/dashboarduser' && "active"}`} to="/dashboard/seller">Check Your BMI</Link>
            </li>
            <Navlogout />
            <li>
            {auth.user.isAdmin ? <Link to="/Admin" className="btn btn-primary">User Details</Link> :null }
            </li>
        </ul>
    );
};

export default DashboardNav;