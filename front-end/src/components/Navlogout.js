import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



const Navlogout = () => {
   
    const { auth } = useSelector((state) => ({ ...state }));
    const history = useHistory()
    const logOut = () => {
        
        window.localStorage.removeItem('auth');
        history.push("/login");
    }
console.log(auth.user.isAdmin)
  
    return (

        <div className="nav">
            <a className='btn btn-secondary' onClick={logOut}>Logout</a>
            
            {auth === null && (
                <>
                    <Link className='btn btn-info' to="/login">Login</Link>
                </>
            )}
        </div>


    )
};


export default Navlogout;