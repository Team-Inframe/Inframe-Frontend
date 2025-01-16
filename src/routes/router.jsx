import { MainPage } from "@/pages/Main/page";
import SelectFrame from "@/pages/SelectFrame/page";
import MakeFrame from "@/pages/MakeBG/page";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/selectframe",
    children: [{ index: true, element: <SelectFrame /> }],
  },
  {
    path: "/selectframe/makeframe",
    children: [{ index: true, element: <MakeFrame /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
