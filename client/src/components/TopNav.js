import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



const TopNav = () => {

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory()
  // console.log(auth);

  // const logout = () => {
  //   dispatch({
  //     type: 'LOGOUT',
  //     payload: null,
  //   });
  //   window.localStorage.removeItem('auth');
  //   history.push("/login");
  // };

  return (

    <div className="nav">
      <div>
      <img src="https://img.freepik.com/free-vector/indikator-bmi-white-background-chart-concept-vector-icon_100456-6270.jpg" alt=""></img>
      </div>

      <Link className='nav-link btn btn-info' to="/Subnav">Home</Link>
      <Link className='nav-link btn btn-info' to="/">Login</Link>
      <Link className='nav-link btn btn-info' to="/register">Register</Link>
      

      {auth === null && (
        <>
          <Link className='nav-link' to="/login">Login</Link>
        </>
      )}
    </div>


  )
};


export default TopNav;