import { Loading } from "@/pages/loading";
import { PollDetail } from "@/pages/poll-detail";
import { Suspense, lazy, type FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@/pages/home/ui/home"));

const AppRouter: FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poll/:id" element={<PollDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
