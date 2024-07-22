import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
function Signup(){
    const navigate = useNavigate();
    const [error_msg,setErrorMsg]=('');
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [confirm_password,setConfirmPassword]=useState('');
    function loginHandler(e)
    {
        e.preventDefault();
        validatePasswords();
    }
    function validatePasswords()
    {
       if(password!==confirm_password)
       {
        setErrorMsg('passwords do not match.Please try again')
        return;
       }
       const authData=JSON.parse(localStorage.getItem('auth'));
       for (const userobj of authData)
       {
        if(userobj.username===username)
        {
            setErrorMsg('user already exists.Please sign in');
            return;
        }
       }
       setErrorMsg('');
       const userobj={
        username:username,
        password:password
       }
       localStorage.setItem('auth',JSON.stringify([...authData,userobj]))
       navigate('/login')
    }
    return (
        <div className="signup">
        <img id="logo-img" src={process.env.PUBLIC_URL+'/logo.png'} alt="logo"/>
            <form className="signup-form-container" id="signup-form-container" onSubmit={(e)=>{loginHandler(e);}}>
                <h2>Happening Now</h2>
                <h4>Join Today.</h4>
                <div>
                    <label htmlFor="signup_username">Username:</label>
                    <input type="text" name="signup_username" id="signup_username" onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="signup_password">Password:</label>
                    <input type="password" name="signup_password" id="signup_password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor="signup_confirm_password">Password:</label>
                    <input type="password" name="signup_confirm_password" id="signup_confirm_password" onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
                </div>
                <p id="error_msg">{error_msg}</p>
                <button type="submit" id="signup_submit_button">Submit</button>
                <Link to='login'>Already Regstered?Click Here to sign in</Link>
            </form>
        </div>
    )
}
export default Signup;