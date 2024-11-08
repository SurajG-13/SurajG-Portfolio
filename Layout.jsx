import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
