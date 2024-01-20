import RoomCheckAvailability from "../../features/RoomCheckAvailability";
import AllRooms from "../../features/AllRooms";
import { MaxWidthWrapper } from "../Layout/MaxWIdthWrapper";
import Hero from "../../components/Hero";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <MaxWidthWrapper>
        <RoomCheckAvailability />
        <AllRooms />
      </MaxWidthWrapper>
    </>
  );
};

export default Dashboard;
