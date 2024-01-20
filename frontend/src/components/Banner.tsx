import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link
      to="/"
      className="inline-flex justify-between items-center p-1 pr-4 mb-7 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-700"
      role="alert"
    >
      <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
        Offer 🎉
      </span>{" "}
      <span className="text-sm font-medium">
        Get 5% discount of booking of 3 or more rooms!
      </span>
      <svg
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
};

export default Banner;
