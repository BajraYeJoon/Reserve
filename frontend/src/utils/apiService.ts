const BASE_URL = "http://localhost:8000/api";

const fetchAPI = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok)
    throw new Error(`Error with request: ${response.statusText}`);
  return response.json();
};

const apiService = {
  fetchRooms: async () => {
    try {
      return await fetchAPI(`${BASE_URL}/allrooms`);
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
      throw error;
    }
  },

  getBookingsForRoom: async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}/bookings/${id}`);
      const text = await response.text();
      console.log(text);
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error("Failed to fetch bookings for room:", error);
      throw error;
    }
  },

  checkRoomAvailability: async (
    dates: { startDate: string; endDate: string },
    type: string
  ) => {
    try {
      const { startDate, endDate } = dates;
      return await fetchAPI(
        `${BASE_URL}/rooms?startDate=${startDate}&endDate=${endDate}&type=${type}`
      );
    } catch (error) {
      console.error("Error checking room availability:", error);
      throw error;
    }
  },

  roomDetails: async (id: string) => {
    try {
      return await fetchAPI(`${BASE_URL}/rooms/${id}`);
    } catch (error) {
      console.error("Error fetching room details:", error);
      throw error;
    }
  },

  bookRoom: async (
    roomId: string,
    checkIn: string,
    checkOut: string,
    guestName: string
  ) => {
    try {
      return await fetchAPI(`${BASE_URL}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomId, checkIn, checkOut, guestName }),
      });
    } catch (error) {
      console.error("Error booking room:", error);
      throw error;
    }
  },
  createInvoice: async (bookingId: string, totalCost: number) => {
    try {
      return await fetchAPI(`${BASE_URL}/invoice`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId, totalCost }),
      });
    } catch (error) {
      console.error("Error creating invoice:", error);
      throw error;
    }
  },
};

export default apiService;
