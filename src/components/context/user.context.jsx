import { createContext, useState } from "react";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: () => null
});

//component that will wrap around the component that have access to User context
//a wrapper class
//think of it as, inheritance. 
export const UserProvider = ({ children }) => {

    //parent class
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

    //the children will be the child class. children have access to parent's method
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

{/* 
e.g
<UserProvider>
    <app/>
</UserProvider> 
*/}