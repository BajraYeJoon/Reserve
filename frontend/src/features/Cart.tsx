/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Key, useState } from "react";
import apiService from "../utils/apiService";

import CartRoomCard from "../components/CartRoomCard/CartRoomCard";
import BookingForm from "../components/BookingForm/BookingForm";
import InvoiceReceipt from "../components/Invoice/InvoiceReceipt";

// interface CartRoomInfo {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
//   type: string;
// }

const Cart = () => {
  // const { id } = useParams<{ id: string }>();
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guestName, setGuestName] = useState<string>("");
  const [isBooked, setIsBooked] = useState(false);
  const [invoice, setInvoice] = useState<any>(null);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleBookAll = async () => {
    try {
      // Loop over the rooms in the cart
      for (const room of cart) {
        const booking = await apiService.bookRoom(
          room.id!,
          checkIn,
          checkOut,
          guestName
        );

        setIsBooked(true);
        dispatch(clearCart());

        // Calculate total cost
        const totalCost = calculateTotalCost();

        // Create an invoice for the booking
        const invoice = await apiService.createInvoice(booking._id, totalCost);
        console.log(invoice);
        setInvoice(invoice);
      }
    } catch (error) {
      console.error("Failed to book room or create invoice:", error);
    }
  };

  const calculateTotalCost = () => {
    const cartCount = cart.length;
    let baseTotal = cart.reduce(
      (total: any, cartItem: { price: any }) => total + cartItem.price,
      0
    );

    if (cartCount >= 3) {
      baseTotal = baseTotal * 0.95;
    }

    return baseTotal.toFixed(2);
  };

  return (
    <div className="flex h-min flex-col justify-center items-center gap-2  ">
      <div className="flex flex-col items-center gap-4 justify-around ">
        {cart.map((cartinfo: { _id: Key | null | undefined }) => (
          <CartRoomCard room={cartinfo} key={cartinfo._id} />
        ))}
      </div>

      {/* Display total cost */}
      <div className="font-bold tracking-wide text-lg md:text-xl text-center">
        {cart.length >= 3 && (
          <p style={{ fontWeight: "bold", color: "green" }}>
            Discount Applied: 5%
          </p>
        )}
        <hr className="w-full bg-gray-500" />
        <p className="mb-6">Total Cost: ${calculateTotalCost()}</p>
      </div>

      <>
        <BookingForm
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          guestName={guestName}
          setGuestName={setGuestName}
          handleBookAll={handleBookAll}
          cart={cart}
        />
      </>

      {isBooked && <InvoiceReceipt invoice={invoice} />}
    </div>
  );
};

export default Cart;
