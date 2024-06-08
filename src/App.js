// import logo from "./logo.svg";
import "./App.css";
import Hero from "./pages/Hero/hero";
import Nav from "./Navigation/nav";
import About from "./pages/About/about";
import Service from "./pages/Services/services.js";
import FeedBack from "./pages/Feedback/feedback.js";
import Menu from "./pages/Main Menu/menu.js";
import Reserve from "./pages/Reservation/reservation.js";
import Footer from "./Footer/footer.js";
import { useContext, createContext, useState, useEffect } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const route = createBrowserRouter([
//   { path: "/", element: <Nav /> },
//   { path: "/hero", element: <Hero /> },
//   { path: "/about", element: <About /> },
//   { path: "/service", element: <Service /> },
//   { path: "/feedback", element: <FeedBack /> },
//   { path: "/menu", element: <Menu /> },
//   { path: "/reserve", element: <Reserve /> },
//   { path: "/footer", element: <Footer /> },
// ]);
export const UserContext = createContext();
function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light",
  );
  window.localStorage.setItem("theme", theme);
  // return <RouterProvider router={route} />;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <UserContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme === "dark" ? "dark" : ""} dark:bg-blackMode`}>
          {/* <RouterProvider router={route} /> */}
          <Nav />
          <Hero />
          <About />
          <Service />
          <FeedBack />
          <Menu />
          <Reserve />
          <Footer />
        </div>
      </UserContext.Provider>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
