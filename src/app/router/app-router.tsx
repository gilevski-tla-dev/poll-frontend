import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loading } from "@/pages/loading";
import { NotTelegram } from "@/pages/not-telegram";
import { AppInitProvider } from "@/app/providers/app-init-provider";
import { NavBar } from "@/shared/ui";
import { navItems } from "./nav-items";

const Home = lazy(() => import("@/pages/home/ui/home"));
const PollDetail = lazy(() => import("@/pages/poll-detail/ui/poll-detail"));
const CreatePoll = lazy(() => import("@/pages/create-poll/ui/create-poll"));

const AppRouter = () => {
  return (
    <Router>
      <AppInitProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poll/:id" element={<PollDetail />} />
            <Route path="/not-telegram" element={<NotTelegram />} />
            <Route path="/create-poll" element={<CreatePoll />} />
          </Routes>
          <NavBar items={navItems} />
        </Suspense>
      </AppInitProvider>
    </Router>
  );
};

export default AppRouter;
