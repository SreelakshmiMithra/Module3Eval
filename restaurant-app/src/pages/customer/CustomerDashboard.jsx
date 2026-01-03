import {useEffect,useState} from "react";
import {getRestaurants} from "../../services/restaurantServices";
import RestaurantCard from "../../components/RestaurantCard";

const CustomerDashboard = () => {
    const[restaurants,setRestaurants]= useState([]);    
    useEffect(()=>{
        setRestaurants(getRestaurants());
    }, []);

    return(
        <div>
            <h2>Customer Dashboard</h2>
            <div>
                {restaurants.map(r=>(<RestaurantCard key={r.restaurantId}  data={r} />
                ))}
            </div>
        </div>
    ); 
};
export default CustomerDashboard;