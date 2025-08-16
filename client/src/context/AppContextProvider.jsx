
import { AppContext  } from './AppContext';
import {useState }from 'react';
const AppContextProvider = ({ children }) => {
  const [searchFilter,setSearchFilter] = useState({
    title:'',
    location:''
  });
  const [isSearched,setIsSearched] = useState(true);
  const[showRecruiterLogin,setShowRecruiterLogin]=useState(false)
  const[islogin,setIsLogin]=useState(false)
   const value={
setSearchFilter,
searchFilter,
isSearched,
setIsSearched,
showRecruiterLogin,setShowRecruiterLogin
   }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;