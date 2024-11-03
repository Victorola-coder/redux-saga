import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, NotFound, Login } from "./pages";

import { Scroll } from "./animation";

// Authentication function
// const isAuthenticated = () => {
//   // Check if the user is authenticated by making an API call or checking local storage
//   // Replace this with your actual authentication logic
//   const userToken = localStorage.getItem("userToken");

//   if (userToken) {
//     // Verify the token by making an API call to your server
//     // If the token is valid, return true; otherwise, return false
//     // Example API call:
//     // const response = await fetch('/api/verify-token', {
//     //   headers: {
//     //     'Authorization': `Bearer ${userToken}`
//     //   }
//     // });
//     // return response.ok;

//     // For simplicity, let's assume the token is valid if it exists
//     return true;
//   }

//   return false;
// };

// // PrivateRoute component
// const PrivateRoute = ({ element }: { element: React.ReactNode }) => {
//   return isAuthenticated() ? element : <Login />;
// };

// this is just for dome paages you want to repeat same component
const Root = () => {
  return (
    <div>
      {/* here we might add navbar */}
      <ScrollRestoration />
      <Outlet />
      {/* here maybe footer, it will show in all the pages */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // we can create another route object here if we don't want the <Root/> to affect it
]);

export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
