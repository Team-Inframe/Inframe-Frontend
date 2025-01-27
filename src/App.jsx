import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";
import AppContainer from "./libraries";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <RouterProvider router={Router} fallbackElement={null} />
      </AppContainer>
    </QueryClientProvider>
  );
}
