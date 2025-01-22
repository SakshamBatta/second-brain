import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/content/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  }, []);

  return contents;
}
