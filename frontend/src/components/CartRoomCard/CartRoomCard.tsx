import Button from "../Inputs/Button";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

const CartRoomCard = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { room }: any
) => {
  const dispatch = useDispatch();
  console.log(room);
  return (
    <>
      <div className="flex w-full md:w-[60vw] items-center py-4 my-4 px-2 justify-around h-min border  rounded-lg shadow bg-white border-blue-300">
        <img
          className="h-24 w-24  rounded-full object-cover"
          src={room.image}
          alt=""
        />

        {/* ROOM CARD */}
        <div>
          <h5 className=" flex my-2  text-2xl font-bold tracking-tight text-gray-900">
            {room.name}
          </h5>
          <span className="my-3 font-thin text-sm  border border-blue-200 rounded-full px-2 py-1 text-gray-700">
            {room.type.toUpperCase()}
          </span>
          <p className="mt-3 font-normal text-gray-400 ">
            {room.description.substring(0, 50)}...
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:px-4 px-1">
          <p className="mb-3 font-bold  text-gray-700 text-sm md:text-lg lg:text-2xl ">
            ${room.price}
          </p>
          <Button
            label="Remove"
            onClick={() => dispatch(removeFromCart(room.id))}
          />
        </div>
      </div>
    </>
  );
};

export default CartRoomCard;
