import AppRouter from "@/app/router/app-router";
import { QueryProvider } from "./provider";

const App = () => {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
};

export default App;
