 import React, { useContext } from 'react'
 import {Routes,Route} from 'react-router-dom'
 import Home from './pages/Home'
import Applyjob from './pages/Applyjob'
import Applications from './pages/Applications'
import Loading from './components/Loading'
import { useEffect,useState } from 'react'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
import DashBoard from './pages/DashBoard'
import Managejobs from './pages/Managejobs'
import ViewApplications from './pages/ViewApplications'
import Addjobs from './pages/Addjobs'
import 'react-quill/dist/quill.snow.css';
 const App = () => {
  const [loading,setLoading]=useState(false);
  const {showRecruiterLogin}=useContext(AppContext)
useEffect(()=>{
const timer=setTimeout(()=>
  {setLoading(false)
 },5000)
 return ()=>{clearTimeout(timer)}

},[])
if(loading){return <Loading/>}
   return (
      <div>
        {showRecruiterLogin && <RecruiterLogin/>}
        <Routes>

          <Route path='/' element={<Home/>}/> 
          <Route path='/apply-job/:id' element={<Applyjob/>}/> 
          <Route path='/applications' element={<Applications/>}/> 
          <Route path='/dashboard' element={<DashBoard/>}>
<Route path='managejobs' element={<Managejobs/>}/>
<Route path='view-applications' element={<ViewApplications/>}/>
<Route path='add-job' element={<Addjobs/>}/>
          </Route>
         </Routes>
      </div>
   )
 }
 
 export default App