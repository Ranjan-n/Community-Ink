import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { blogDataSelector, loadingAtom } from "../store/atoms";

export function useBlog(id: string) {
  const [loading, setLoading] = useRecoilState(loadingAtom);
  const blogData = useRecoilValue(blogDataSelector(id));
  const setBlogData = useSetRecoilState(blogDataSelector(id));

  useEffect(() => {
    if (blogData) {
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBlogData(res.data.post);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id, setLoading, setBlogData, blogData]);

  return {
    loading,
    blog: blogData,
  };
}
