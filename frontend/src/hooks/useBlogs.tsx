import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { BACKEND_URL } from "../../config";
import { blogsAtom, loadingAtom } from "../store/atoms";
import { useNavigate } from "react-router-dom";

export interface Blog {
  content: string;
  title: string;
  id: string;
  date: string;
  author: {
    name: string;
  };
}

export function useBlogs() {
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const [blogs, setBlogs] = useRecoilState(blogsAtom);
  const navigate = useNavigate();

  const fetchBlogs = () => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBlogs(res.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
        navigate("/login");
      });
  };

  useEffect(() => {
    if (blogs.length > 0) {
      setLoading(false);
      return;
    }

    fetchBlogs();
  }, [blogs, setLoading, setBlogs]);

  return {
    loading,
    blogs,
    fetchBlogs,
  };
}
