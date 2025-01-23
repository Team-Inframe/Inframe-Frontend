import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MINUTES = 1000 * 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryDelay: 1000,
      staleTime: 5 * MINUTES,
    },
  },
});

export default function ReactQuerySetting({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

ReactQuerySetting.propTypes = {
  children: PropTypes.node,
};
