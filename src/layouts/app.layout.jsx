import { Outlet } from "react-router-dom";
import Header from "../components/header";

function AppLayout() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* container - responsive, changes at different breakpoints, adds @media*/}
      <div className="container px-6 py-4 mx-auto">
        {/* header */}
        <Header />
        <main>
          {/* Outlet - to render routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
