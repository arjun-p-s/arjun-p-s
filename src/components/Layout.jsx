import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    // Optional: Smooth scroll polyfill or custom cursor logic here
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen px-4 md:px-8 w-full">
         <div className="max-w-7xl mx-auto w-full">
            {children}
         </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
