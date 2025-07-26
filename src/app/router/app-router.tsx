import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotTelegram } from "@/pages/not-telegram";
import { AppInitProvider } from "@/app/providers/app-init-provider";
import { NavBarLayout } from "@/shared/ui";
import { navItems } from "./nav-items";
import { CreatePoll } from "@/pages/create-poll";
import { Home } from "@/pages/home";
import { PollDetail } from "@/pages/poll-detail";
import { QuestionList } from "@/pages/question-list";
import { CreateQuestion } from "@/pages/create-question";

const AppRouter = () => {
  return (
    <Router>
      <AppInitProvider>
        <Routes>
          <Route element={<NavBarLayout items={navItems} />}>
            <Route path="/" element={<Home />} />
            <Route path="/create-poll" element={<CreatePoll />} />
          </Route>
          <Route path="/poll/:id" element={<PollDetail />} />
          <Route path="/not-telegram" element={<NotTelegram />} />
          <Route path="/question-list/:pollId" element={<QuestionList />} />
          <Route
            path="/question-list/:pollId/question"
            element={<CreateQuestion />}
          />
        </Routes>
      </AppInitProvider>
    </Router>
  );
};

export default AppRouter;
