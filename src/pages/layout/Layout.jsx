import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Place shared components like <Navbar /> here if needed */}
      
      <main className="">
        {/* Outlet renders the child routes dynamically */}
        <Outlet />
      </main>

      {/* Place shared components like <Footer /> here if needed */}
    </div>
  );
};

export default Layout;