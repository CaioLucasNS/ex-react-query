import { ContextProvider } from "./context";
import { Home } from "./pages/Home";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

function App() {
  return (
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </ContextProvider>
  );
}

export default App;
