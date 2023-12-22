import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frontlayout from "./frontlayout";
import Signinpage from "./signin";
import Welcomepage from "./welcomepage";
export default function Applayout() {
  const Approuter = createBrowserRouter([
    {
      path: "/",
      element: <Frontlayout />,
      children: [
        {
          path: "/",
          element: <Welcomepage />,
        },
        {
          path: "/Signin",
          element: <Signinpage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={Approuter} />;
}
