const LoginForm = ({handleSubmit, email, setEmail, password, setPassword})  => (
    <form onSubmit={handleSubmit} className="mt-3 m">
        <div className='form-group mb-3'>
            <label  className='form-label'><h3>Email Address</h3></label>
            <input 
                type="email" 
                className='form-control' 
                placeholder="Enter the email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />
        </div>
        <div className='form-group mb-3'>
            <label  className='form-label'><h3>Password</h3></label>
            <input 
                type="password" 
                className='form-control' 
                placeholder="Enter the password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
        </div>

        <button disabled={!email || !password} className='btn btn-primary'>Submit</button>
        
    </form>
);

export default LoginForm;