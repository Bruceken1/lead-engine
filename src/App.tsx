import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Overview from "./pages/Overview";
import Leads from "./pages/Leads";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/leads" element={<Leads />} />
          {/* Add more routes later: /campaigns, /pipeline, /settings */}
        </Routes>
      </Router>
      <Toaster position="top-center" richColors closeButton />
    </QueryClientProvider>
  );
}

export default App;