import { Outlet } from "react-router-dom";
import Navbar from "./features/layout/Navbar";
import Footer from "./features/layout/Footer";


export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
