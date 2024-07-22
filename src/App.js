import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
//  const is_user_logged_in=localStorage.getItem('is_user_logged_in')||'false';
 console.log("app");
  return (
    <div className="App">
    {/* <BrowserRouter>
   <NavBar/>
   <Routes>
<Route path='/' element={is_user_logged_in==='true'?<Home/>:<Login/>}/>
    <Route path='/home' element={<Home/>}/>
     <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter> 
      */}
      <Login/>

    </div>
  );
}

export default App;
