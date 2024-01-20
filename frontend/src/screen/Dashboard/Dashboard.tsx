import RoomCheckAvailability from "../../features/RoomCheckAvailability";
import AllRooms from "../../features/AllRooms";
import { MaxWidthWrapper } from "../Layout/MaxWIdthWrapper";
import Hero from "../../components/Hero";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <MaxWidthWrapper>
        <AllRooms />
        <RoomCheckAvailability />
      </MaxWidthWrapper>
    </>
  );
};

export default Dashboard;
