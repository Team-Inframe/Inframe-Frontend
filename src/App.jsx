import { RouterProvider } from "react-router-dom";
import Router from "@/routes/router";

export default function App() {
  return <RouterProvider router={Router} fallbackElement={null} />;
}
