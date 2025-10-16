import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu";
import Header from "../../components/Header";
import FoodDisplay from "../../components/FoodDisplay";
import AppDownload from "../../components/AppDownload";


export default function Home() {
  const [category,setCategory] = useState('All');
  return (
    <div className="container mx-auto px-4">
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}
