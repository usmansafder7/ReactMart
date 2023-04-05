import { Routes, Route } from "react-router-dom";
import { Cart, ProductsList } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<ProductsList title="Home"/>}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}
