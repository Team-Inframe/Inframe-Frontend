import { HotFramePage } from "@/pages/HotFramePage/page";
import { MainPage } from "@/pages/Main/page";
import { SaveHotFrame } from "@/pages/SaveHotFrame/page";
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
  {
    path: "/savehotframe",
    children: [{ index: true, element: <SaveHotFrame /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
