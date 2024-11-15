import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <div className="bg-slate-50 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
