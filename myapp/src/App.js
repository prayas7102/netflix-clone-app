import './App.css';
import Home from './Home';
import LoginScreen from './LoginScreen';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {auth} from './_Firebase';
import { useEffect} from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {login,logout,selectUser} from './userSlice'
function App() {
  const isLargeRow=1;
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log('hi')
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({uid:userAuth.uid,email: userAuth.email}));
      }else{
        dispatch(logout())
      }
    });
    return unsubscribe;
  },[dispatch]);
  return (
    <div className='app'>
      <Router>
      <Routes>
        {console.log(user)}
        {(user.user)?(<><Route path="/" element={<Home/>} /><Route path="/profile" element={<Profile/>}/></>):(<><Route exact path="/" element={<LoginScreen/>}/></>)}
      </Routes>
      </Router>      
    </div>
    
  );
}

export default App;
