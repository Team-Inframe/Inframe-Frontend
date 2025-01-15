import { HotFramePage } from "@/pages/HotFramePage/page";
import { MainPage } from "@/pages/Main/page";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/hotframe",
    children: [{ index: true, element: <HotFramePage /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
