import AppRouter from "@/app/router/app-router";
import { QueryProvider } from "./providers/query-provider";

const App = () => {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
};

export default App;
