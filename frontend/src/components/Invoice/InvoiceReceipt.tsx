/* eslint-disable @typescript-eslint/no-explicit-any */

import { jsPDF } from "jspdf";

const InvoiceReceipt = ({ invoice }: any) => {
  console.log(invoice);

  const downloadPdf = () => {
    const doc = new jsPDF();

    doc.text("Invoice ID: " + invoice._id, 10, 10);
    doc.text("Customer Name: " + invoice.customerName, 10, 20);
    doc.text("Status: " + invoice.Status, 10, 30);
    doc.text(
      "Check In Date: " + new Date(invoice.checkInDate).toLocaleDateString(),
      10,
      40
    );
    doc.text(
      "Check Out Date: " + new Date(invoice.checkOutDate).toLocaleDateString(),
      10,
      50
    );
    doc.text("Room Type: " + invoice.roomType, 10, 60);
    doc.text("Room Description: " + invoice.roomDescription, 10, 70);
    doc.text("Room Price: $" + invoice.roomPrice, 10, 80);
    doc.text("Total Cost: $" + invoice.totalCost, 10, 90);

    doc.save("invoice.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 md:mt-10 w-full md:w-2/3 px-2 md:px-16 md:py-4 bg-slate-100 rounded-lg shadow-md">
      <h2 className="text-center text-base tracking-wider md:text-2xl font-bold my-2 md:my-4">
        Booking Confirmed!
      </h2>

      <p className="text-base font-bold my-4">Invoice ID: {invoice?._id}</p>

      <div className="flex justify-between gap-12">
        <p className="font-bold text-lg">
          Customer Name:{" "}
          <span className="font-extralight">{invoice?.customerName}</span>
        </p>
        <p className="font-bold text-lg">
          Status: <span className="font-extralight">{invoice?.Status}</span>
        </p>
      </div>
      <div className="flex justify-between gap-12">
        <p className="font-bold text-lg">
          Check In Date:{" "}
          <span className="font-extralight">
            {new Date(invoice?.checkInDate).toLocaleDateString()}
          </span>
        </p>
        <p className="font-bold text-lg">
          Check Out Date:{" "}
          <span className="font-extralight">
            {new Date(invoice?.checkOutDate).toLocaleDateString()}
          </span>
        </p>
      </div>

      <p className="text-center font-bold">Total Cost: ${invoice?.totalCost}</p>

      <div
        className="px-2 py-4 bg-gray-200 text-center rounded-md"
        onClick={downloadPdf}
      >
        <span>Download</span>
      </div>
    </div>
  );
};

export default InvoiceReceipt;
