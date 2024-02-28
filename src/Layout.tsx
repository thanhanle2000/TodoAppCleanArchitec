import NotFound from "src/Presentation/NotFound/NotFound";
import TodoPage from "src/Presentation/Todo/TodoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
