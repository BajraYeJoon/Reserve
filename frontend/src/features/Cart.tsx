import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../utils/apiService";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../components/Invoice";

interface Room {
  id: string;
  name: string;
  price: number;
}

const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guestName, setGuestName] = useState<string>("");
  const [isBooked, setIsBooked] = useState(false);
  const [invoice, setInvoice] = useState<any>(null);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Call your API service to book each room
  // You might want to handle this on the server side to ensure atomicity
  const handleBookAll = async () => {
    try {
      // Loop over the rooms in the cart
      for (const room of cart) {
        // Book the room
        console.log(room.id);

        const booking = await apiService.bookRoom(
          room.id!,
          checkIn,
          checkOut,
          guestName
        );

        console.log(booking);

        setIsBooked(true);

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
    let baseTotal = cart.reduce((total, cartItem) => total + cartItem.price, 0);

    if (cartCount >= 3) {
      baseTotal = baseTotal * 0.95;
    }

    return baseTotal.toFixed(2);
  };

  return (
    <div>
      {cart.map((room) => (
        <div key={room.id}>
          <h2>{room.name}</h2>
          <p>{room.price}</p>
          <button onClick={() => dispatch(removeFromCart(room.id))}>
            Remove
          </button>
        </div>
      ))}

      {cart.length >= 3 && (
        <p style={{ fontWeight: "bold", color: "green" }}>
          Discount Applied: 5%
        </p>
      )}

      {/* Display total cost */}
      <p>Total Cost: ${calculateTotalCost()}</p>

      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
      />
      {isBooked ? (
        <div>
          <p>Booking Confirmed!</p>
          <p>Invoice ID: {invoice?._id}</p>
          <p>Total Cost: ${invoice?.totalCost}</p>
          <p>Customer Name: {invoice?.customerName}</p>
          <p>Status: {invoice?.Status}</p>
          <p>
            Check In Date: {new Date(invoice?.checkInDate).toLocaleDateString()}
          </p>
          <p>
            Check Out Date:{" "}
            {new Date(invoice?.checkOutDate).toLocaleDateString()}
          </p>

          <div>
            {/* <PDFDownloadLink
              document={<Invoice invoice={invoice} />}
              fileName="invoice.pdf"
            >
             
            </PDFDownloadLink> */}
            <div className="px-2 py-4 bg-gray-200 text-center rounded-md">
              <span>Download</span>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={handleBookAll}>Book All</button>
      )}
    </div>
  );
};

export default Cart;
