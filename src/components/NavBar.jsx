import React from 'react'
 import './NavBar.css';

function NavBar(){
    return (
        <div className="NavBar">
            { console.log('heello from navbar')}
                <img src={process.env.PUBLIC_URL+'./logo.png' } alt=""/>
            
        </div>
    )
}
export default NavBar