import AppRouter from "@/app/router/app-router";
import { QueryProvider } from "./providers/query-provider";
import { Notifications } from "@/features/notification";

const App = () => {
  return (
    <QueryProvider>
      <AppRouter />
      <Notifications />
    </QueryProvider>
  );
};

export default App;
