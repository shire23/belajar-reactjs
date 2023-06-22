import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMemes } from "../services/memes.service";

export default function MemesDetailPage() {
  const { id } = useParams();
  const { Memes, setMemes } = useState({});

  useEffect(() => {
    getMemes(id, (data) => {
      setMemes(data);
    });
  }, [id]);

  console.log(Memes);
  return (
    <div>
      <div> Memes Detail : {id}</div>
    </div>
  );
}
