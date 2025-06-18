import AppRouter from "@/app/router/app-router";
import { QueryProvider } from "./providers/query-provider";
import { AppInitProvider } from "./providers/app-init-provider";

const App = () => {
  return (
    <QueryProvider>
      <AppInitProvider>
        <AppRouter />
      </AppInitProvider>
    </QueryProvider>
  );
};

export default App;
