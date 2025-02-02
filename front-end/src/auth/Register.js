import { useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { register } from "../actions/auth";


const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      });
      console.log('REGISTER USER ====>', res);
      toast.success('Register success.Please login.');
      history.push('/login');
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };
  return (
    <>

   
      <div className="" >
        <div className='nav side'>
        <Link className='btn btn-info' to="/login">Login</Link>
        </div>
        <div className="Register">
          <h1>Register</h1>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <RegisterForm
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Register;


