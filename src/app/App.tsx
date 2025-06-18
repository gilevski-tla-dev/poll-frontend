import AppRouter from "@/app/router/app-router";
import { QueryProvider } from "./providers/query-provider";
import { AppInitProvider } from "./providers/app-init-provider";

const App = () => {
  return (
    <AppInitProvider>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </AppInitProvider>
  );
};

export default App;
