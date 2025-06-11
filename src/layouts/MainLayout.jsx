import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/contact"]; // Podés agregar más
  const is404 = location.pathname !== "/" &&
                !["/Cv", "/aboutme", "/contact", "/proyects"].includes(location.pathname);

  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname) && !is404;

  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default MainLayout;