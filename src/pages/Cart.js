import { CartCard } from "../components/CartCard";
import { useCart } from "../context/cartContext";


export const Cart = () => {

  const {cartList, total} = useCart();

  return (
    <main>
      <div className="flex flex-col">
        <span className="text-3xl text-center font-semibold p-2 mt-8 mb-4 dark:text-white">Total: ${total}</span>
        {cartList && cartList.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      </div>
    </main>
  )
}
