import  React,{useState}  from "react";
import './Login.css'
import {Link, useNavigate } from "react-router-dom";
function Login()
{
    console.log('component rendering started');
    const navigate=useNavigate();
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [errorMsg,setErrorMsg]=useState('');
     function loginHandler(e)
     {
       e.preventDefault();
       console.log(username,password);
       validatePasswords();
     }
     function validatePasswords()
     {
        const authData=JSON.parse(localStorage.getItem('auth'))||[];
        for ( const userobj of authData)
        {
            
            console.log(userobj.username,userobj.password);
            if(username===userobj.username)
            {
                if(password===userobj.password)
                {
                    setErrorMsg('');
                    localStorage.setItem('is_user_logged_in','true');
                    navigate('/home')
                }
                else{
                    setErrorMsg('password entered is incorrect');
                    return;
                }
            }
            setErrorMsg('user dosent exist .please sign up first.. ')

        }
     }  
     console.log("fo")
    return(
        
        <div className="login">
            {console.log("form")}
            <img id="logo-img" src={process.env.PUBLIC_URL+'/logo.png'} alt="logo"/>
            <form className="login-form-container" id="login-form-container" onSubmit={(e)=>{loginHandler(e);}}>
                <h2>Happening Now</h2>
                <h4>Join Today.</h4>
                <div>
                    <label htmlFor="sign_in_username">Username:</label>
                    <input type="text" name="sign_in_username" id="sign_in_username" onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="sign_in_password">Password:</label>
                    <input type="password" name="sign_in_password" id="sign_in_password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <p id="error_msg">{errorMsg}</p>
                <button type="submit" id="login-submit-button">Submit</button>
                <Link to='signup'>Not Regstered?Click Here to sign up</Link>
            </form>
            {console.log('component rendering stopped')}
        </div>
    )
}
export default Login;

