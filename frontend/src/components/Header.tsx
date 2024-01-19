import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartCount = useSelector((state: any) => state.cart.length);

  return (
    <nav className="bg-white border-gray-20">
      <div className="flex justify-between items-center  w-full p-4">
        <Link to="/">
          <span className=" text-2xl font-semibold whitespace-nowrap">
            Reserve
          </span>
        </Link>
        <div className="flex items-center">
          <Link to="/" className="text-sm  text-blue-600 hover:underline">
            Login
          </Link>
          <Link to="/cart">
            <span>{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
