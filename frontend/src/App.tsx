import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { Publish } from "./pages/Publish";
import { RecoilRoot } from "recoil";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
