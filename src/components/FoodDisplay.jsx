import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import FoodItem from "./FoodItem"

export default function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
  return (
    <div className="mt-8 container px-4 mx-auto" id="food-display">
        <h2 className="text-3xl font-semibold">Top dished near you</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7.5 space-x-12.5 mt-7.5">
            {food_list.map((item,index)=>{
              // Filter the menu
                if((category==='All') || (category === item.category)){
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
              //========
            })}
        </div>
    </div>
  )
}
