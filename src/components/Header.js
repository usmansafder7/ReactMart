import logo from "../assets/logo.png";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {

    const { cartList } = useCart();

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
    
        if (darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, 
      [darkMode])


  return (
    <header>
        <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 pt-2 pb-3 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
            <div className="flex flex-wrap items-center justify-between mx-auto px-8">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-16 w-16 mr-0" alt="Shopzilla Logo" />
                    <span className="self-center text-3xl font-semibold whitespace-nowrap pt-4 dark:text-white">ReactMart</span>
                </Link>
                <div className="flex md:order-2 pt-4">
                    <button onClick={() => setDarkMode(!darkMode)} className="border rounded-lg border-gray-300 bg-gray-50 hover:bg-gray-100 hover:text-orange-600 px-3 mr-2 dark:bg-gray-700 dark:border-gray-600 max-sm:hidden text-gray-500 dark:hover:text-white">
                        { darkMode ? (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>) : 
                        (<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>) }
                    </button>
                    <Link to="/cart">
                        <button className="relative flex gap-4 hover:text-orange-600 px-3 py-1 mr-2 text-gray-500 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className="absolute bottom-0 right-0 border rounded-full px-1 text-sm text-white bg-orange-600">
                                {cartList.length}
                            </span>
                        </button>
                    </Link>
                </div>        
            </div>
        </nav>
    </header>
  )
}
