import { MainPage } from "@/pages/Main/page";
import LoginPage from "@/pages/LoginPage/page";
import { createBrowserRouter } from "react-router-dom";
import { Children } from "react";
import { element } from "prop-types";

const routes = [
  {
    path: "/",
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: "/login",
    children: [{ index: true, element: <LoginPage /> }],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
