import { useContext } from "react";
import{ useNavigate} from "react-router-dom";
import {AuthContext} from "../auth/AuthContext";

 const Navbar = () => {
    const {user,logout} = useContext (AuthContext);
    const navigate = useNavigate();
    const handleLogout =()=>{
        logout();
        navigate ("/");
    };
    return (
        <nav style ={{ padding:"10px", borderBottom:"1px solid #ccc"}}>
        <h3 style ={{ display:"inline", marginRight:"20px"}}>Restaurant App</h3>
        {/* Show user info and logout if logged in */}
        {user && (
            <> <span style ={{ marginRight:"20px"}}>Role:<strong>{user.role}</strong>|</span>
                <button onClick={handleLogout} style ={{ padding:"5px 10px", backgroundColor:"#f44336", color:"white", border:"none", borderRadius:"4px"}}>Logout</button>
            </>
        )}
        </nav>
    );
 };
 export default Navbar;