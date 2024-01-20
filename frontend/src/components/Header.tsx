import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";

const Header = () => {
  const cartCount = useSelector((state: any) => state.cart.length);

  return (
    <nav className="border border-t-gray-600 mx-auto px-2 lg:px-28 ">
      <div className="flex justify-between items-center  w-full p-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />

          <Link to="/">
            <span className=" text-2xl font-semibold">Reserve</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <FaBed size={20} />
          <Link to="/cart">
            <span>{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
