
import { jobsData } from '../assets/assets';
import { AppContext  } from './AppContext';
import {useEffect, useState }from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
const AppContextProvider = ({ children }) => {
  const [searchFilter,setSearchFilter] = useState({
    title:'',
    location:''
  });
  const [isSearched,setIsSearched] = useState(true);
  const[showRecruiterLogin,setShowRecruiterLogin]=useState(false)
  const[islogin,setIsLogin]=useState(false)
  const [companyData,setCompanyData]=useState(null)
  const [companyToken,setCompanyToken]=useState(null)
  const [alljobs,setAlljobs]=useState([])
  const backendUrl=import.meta.env.VITE_BACKEND_URL
   const value={
setSearchFilter,
searchFilter,
isSearched,
setIsSearched,
showRecruiterLogin,setShowRecruiterLogin,companyData,setCompanyData,companyToken,setCompanyToken
  ,backendUrl ,alljobs,setAlljobs}
const fetchJobs=async()=>{
  setAlljobs(jobsData)
  const storedCompanyToken=localStorage.getItem('companyToken')
  if(storedCompanyToken){
    setCompanyToken(storedCompanyToken)
  }
}
const fetchCompanyData=async()=>{
  try {
    const {data}=await axios.get(backendUrl+'/api/company/company',{headers:{token:companyToken}})
    if(data.success){
      console.log(data)
      setCompanyData(data.company)
    }
    else{
      toast.error(data.message)
    }
  } catch (error) {
  toast.error(error.message)
  }
}
useEffect(()=>{

if(companyToken){fetchCompanyData()}
fetchJobs()
},[companyToken])
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;