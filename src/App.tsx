import { AddressSearchTestPage } from "@pages/AddressTestPage";
import { TestPage } from "@pages/TestPage";
import { queryClient } from "@shared/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AddressSearchTestPage />
    </QueryClientProvider>
  );
}

export default App;
