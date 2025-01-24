import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";
import AppContainer from "./libraries";

export default function App() {
  return (
    <AppContainer>
      <RouterProvider router={Router} fallbackElement={null} />
    </AppContainer>
  );
}
