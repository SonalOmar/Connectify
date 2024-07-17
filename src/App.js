import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Login from '.pages/Login'
function App() {
  const is_user_logged_in="true";
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={is_user_logged_in==='true'?<Home/>:<Login/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
