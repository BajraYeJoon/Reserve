import RoomCheckAvailability from "../../features/RoomCheckAvailability";
import AllRooms from "../../features/AllRooms";

const Dashboard = () => {
  return (
    <div>
      <AllRooms />
      <RoomCheckAvailability />
    </div>
  );
};

export default Dashboard;
