import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotTelegram } from "@/pages/not-telegram";
import { AppInitProvider } from "@/app/providers/app-init-provider";
import { NavBar } from "@/shared/ui";
import { navItems } from "./nav-items";
import { CreatePoll } from "@/pages/create-poll";
import { Home } from "@/pages/home";
import { PollDetail } from "@/pages/poll-detail";
import { QuestionList } from "@/pages/question-list";

const AppRouter = () => {
  return (
    <Router>
      <AppInitProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poll/:id" element={<PollDetail />} />
          <Route path="/not-telegram" element={<NotTelegram />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/question-list/:poll-id" element={<QuestionList />} />
        </Routes>
        <NavBar items={navItems} />
      </AppInitProvider>
    </Router>
  );
};

export default AppRouter;
