import axiosInstance from "../utils/axiosInstance";
export const getRestaurants =  () => {
    JSON.parse(localStorage.getItem("restaurants")) || [];
};
export const addRestaurant =(data)=>{
    const list=getRestaurants();
    localStorage.setItem("restaurants",JSON.stringify([...list,data]));
};
export const updateRestaurant =(id,updated)=>{
    const list=getRestaurants().map(r=>r.restaurantId===id ? updated: r);
    localStorage.setItem("restaurants",JSON.stringify(list));
};
export const deleteRestaurant =(id)=>{
    const list=getRestaurants().filter(r=>r.restaurantId !==id);
    localStorage.setItem("restaurants",JSON.stringify(list));
}