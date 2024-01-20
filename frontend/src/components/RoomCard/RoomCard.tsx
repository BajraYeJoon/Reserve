import { Link } from "react-router-dom";
const RoomCard = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { room }: any
) => {
  return (
    <>
      <div className="max-w-sm w-[300px] h-min border  rounded-lg shadow bg-white border-blue-300">
        <a href="#">
          <img
            className="h-[200px] w-full rounded-t-lg object-cover"
            src={room.image}
            alt=""
          />
        </a>
        <div className="p-2 md:px-5 md:py-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {room.name}
          </h5>

          <span className="my-3 font-thin text-sm  border border-blue-200 rounded-full px-2 py-1 text-gray-700">
            {room.type.toUpperCase()}
          </span>
          <p className="mt-3 font-normal text-gray-400 ">
            {room.description.substring(0, 50)}...
          </p>
          <p className="mb-3 font-normal text-gray-700 text-lg ">
            ${room.price}
          </p>
          <Link
            to={`/rooms/${room._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-whiterounded-lg hover:bg-blue-800 text-white rounded-lg bg-blue-600 "
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomCard;
