import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loading } from "@/pages/loading";
import { NotTelegram } from "@/pages/not-telegram";
import { PollDetail } from "@/pages/poll-detail";
import { AppInitProvider } from "@/app/providers/app-init-provider";

const Home = lazy(() => import("@/pages/home/ui/home"));

const AppRouter = () => {
  return (
    <Router>
      <AppInitProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poll/:id" element={<PollDetail />} />
            <Route path="/not-telegram" element={<NotTelegram />} />
          </Routes>
        </Suspense>
      </AppInitProvider>
    </Router>
  );
};

export default AppRouter;
