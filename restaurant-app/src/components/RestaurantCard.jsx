import {useNavigate} from 'react-router-dom';
import { deleteRestaurant } from '../services/restaurantServices';
const RestaurantCard = ({data,isAdmin}) => {
    const navigate = useNavigate();
    const handleDelete=()=>{
        if(confirm("Are you sure")){
            deleteRestaurant (data.restaurantId);
            alert("Deleted successfully");
            window.location.reload();
        }
     };
     return (
        <div> 
        <img  src={data.image} width="100"/>
        <h4>{data.restaurantname}</h4>
        <p> {data.type}</p>
        <p>{data.parkinglot ? "Parking Available" : "No Parking"}</p>
        {isAdmin && (
            <>
                <button onClick={()=> navigate(`/admin/restaurants/update/${data.restaurantId}`)}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </>
        )}
        </div>
        );
    };
export default RestaurantCard;