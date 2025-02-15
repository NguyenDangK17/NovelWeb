import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.js";
import Detail from "./pages/Novel/NovelDetailPage.js";
import Layout from "./pages/Layout.js";
import AboutPage from "./pages/AboutPage.js";
import MangaListPage from "./pages/Manga/MangaListPage.js";
import NovelListPage from "./pages/Novel/NovelListPage.js";
import NovelChapterPage from "./pages/Novel/NovelChapterPage.js";
import NotFoundPage from "./pages/404NotFoundPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/comic/:id" element={<Detail />} />
          <Route path="/comic/chapter/:id" element={<NovelChapterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/manga" element={<MangaListPage />} />
          <Route path="/novel" element={<NovelListPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
