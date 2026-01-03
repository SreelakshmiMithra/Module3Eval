import { useState } from "react";
import { addRestaurant } from "../services/restaurantServices";
const RestaurantForm = ({ refresh }) => {
  const [name, setName] = useState("");
  const handleAdd=()=>{
    if(!name) return alert("Empty form not allowed");
    const data ={
       restaurantId:Date.now(),
       restaurantname:name,
       type:"Rajasthani",
       parkinglot:true,image:"https://coding-platform.s3.ap-south-1.amazonaws.com/sample.jpg",
       address:"Jaipur"
    };
        
    addRestaurant(data);
    alert("Restaurant added");
    setName("");
    refresh();
};
return(
    <div>
        <h3>Add Restaurant</h3>
        <input  value={name} onChange={e=> setName (e.target.value)}/>
        <button onClick={handleAdd}>Add</button>

    </div>
);
};

export default RestaurantForm;