/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "../Inputs/CustomInput";
import Button from "../Inputs/Button";

interface BookingFormProps {
  checkIn: string;
  setCheckIn: (value: string) => void;
  checkOut: string;
  setCheckOut: (value: string) => void;
  guestName: string;
  setGuestName: (value: string) => void;
  handleBookAll: () => void;
  cart: any[];
}

const BookingForm = ({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guestName,
  setGuestName,
  handleBookAll,
  cart,
}: BookingFormProps) => {
  return (
    <div className="flex background-gradient md:rounded-xl md:px-8 md:py-8 flex-col  justify-center gap-4 items-center ">
      <h1 className="text-base md:text-xl text-white tracking-wide font-semibold">
        Book Rooms
      </h1>

      <div className="flex flex-col items-center sm:flex-row w-full bg-blue-800 px-8 py-2 rounded-xl text-white justify-center md:items-end gap-8">
        <CustomInput
          type="date"
          label="Check In date:"
          value={checkIn}
          onChange={setCheckIn}
        />

        <CustomInput
          type="date"
          label="Check Out date:"
          value={checkOut}
          onChange={setCheckOut}
        />

        <CustomInput
          type="text"
          value={guestName}
          label="Guest Name"
          onChange={setGuestName}
        />
      </div>

      <Button
        label={cart.length > 1 ? "Book All Rooms" : "Book Room"}
        onClick={handleBookAll}
        disabled={cart.length === 0}
      />
    </div>
  );
};

export default BookingForm;
