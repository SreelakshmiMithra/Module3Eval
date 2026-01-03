import {createContext, useState} from "react";
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(()=>{
        return JSON.parse(localStorage.getItem("user")) || null;
    });
    const login =(email,password)=>{
        if(email==="admin@gmail.com"&& password==="admin1234"){
            const u ={role:"admin"};
            localStorage.setItem("user",JSON.stringify(u));
            setUser(u);
            return u;
        }
        if(email ==="customer@gmail.com" && password==="customer1234"){
            const u ={role:"customer"};
            localStorage.setItem("user",JSON.stringify(u));
            setUser(u);
            return u;
        }
        return null;
    };
    const logout =()=>{
        localStorage.removeItem("user");
        setUser (null);
    };
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
    };