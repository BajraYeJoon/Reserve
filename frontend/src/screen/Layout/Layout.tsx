import { Outlet } from "react-router-dom";
import { MaxWidthWrapper } from "./MaxWIdthWrapper";
import Header from "../../components/Header";
const Layout = () => {
  return (
    <MaxWidthWrapper>
      <Header />
      <Outlet />
      FOoter
    </MaxWidthWrapper>
  );
};

export default Layout;
