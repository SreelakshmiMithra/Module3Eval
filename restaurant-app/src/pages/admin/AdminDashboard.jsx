import {useEffect,useState} from "react";
import RestaurantForm from "../../components/RestaurantForm";
import RestaurantCard from "../../components/RestaurantCard";
import {getRestaurants} from "../../services/restaurantServices";

const AdminDashboard = () => {
    const[restaurants,setRestaurants]= useState([]);

    useEffect(()=>{
        setRestaurants(getRestaurants());
    }, []);

    return(
        <div style ={{display:"flex"}}>
            <RestaurantForm refresh={()=> setRestaurants (getRestaurants())}/>
            <div>
                {restaurants.map(r=>(<RestaurantCard key={r.restaurantId}  data={r} isAdmin/>
                ))}
            </div>
        </div>
    ); 
};
export default AdminDashboard;