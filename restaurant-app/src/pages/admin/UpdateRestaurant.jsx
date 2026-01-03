import {useParams,useNavigate} from "react-router-dom";
import { getRestaurants,updateRestaurant } from "../../services/restaurantServices";
import {useState} from "react";

 const UpdateRestaurant = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const restaurant = getRestaurants().find(r=> r.restaurantId === id);
    const[name,setName]= useState(restaurant.restaurantname);

    const handleUpdate=()=>{    
        if(confirm("Are you sure to update?")){
            updateRestaurant(restaurant.restaurantId,{
                ...restaurant,
                restaurantname:name});
            alert("Updated successfully");
            navigate("/admin/dashboard");
        }
    };
    return(
        <div>
            <h2>Update Restaurant</h2>
            <input value ={name} onChange={e=> setName (e.target.value)}/>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
 };
 export default UpdateRestaurant;