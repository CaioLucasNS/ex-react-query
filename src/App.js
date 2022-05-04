import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { createContext } from "react";
import { ContextProvider } from "./context";

const queryClient = new QueryClient();
const context = createContext();

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
