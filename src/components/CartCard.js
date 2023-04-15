import { useCart } from "../context/cartContext";

export const CartCard = ({ product }) => {

  const { image, title, price } = product;
  const {removeFromCart} = useCart();

  return (
    <div className="flex flex-wrap justify-between items-center shadow-md border border-gray-200 rounded-md m-2 mx-8 p-4 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center gap-8 ml-6">
        <img src={image} alt={title} className="w-28 h-28 mr-0 max-sm:hidden"/>
        <p className="flex flex-col gap-2">
          <span className="text-xl mr-0 dark:text-white">{title}</span>
          <span className="text-2xl font-semibold mr-0 dark:text-white">${price}</span>
        </p>
      </div>
      <button onClick={() => removeFromCart(product)} className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-6 max-sm:mt-4 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Remove</button>
    </div>
  );
};
