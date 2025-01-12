import { MainPage } from "@/pages/Main/page";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    children: [{ index: true, element: <MainPage /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
