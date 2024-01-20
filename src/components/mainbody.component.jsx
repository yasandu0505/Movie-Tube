import Videocard from "./videocard.component";
import { useEffect, useState } from "react";

function Mainbody({ selectedCategory, searchTerm }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/movies")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource...");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  const filteredVideoCards = data
    ? Array.from(data.values())
        .map((card) => ({
          ...card,
          matchesCategory:
            selectedCategory === "All" || card.category === selectedCategory,
          matchesSearch: card.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
        }))
        .filter((card) => card.matchesCategory && card.matchesSearch)
    : [];

  return (
    <section id="intro">
      <div className="container-lg">
        <div className="text-end">
          <h2 className="lead my-3 text-center text-md-end">
            Explore A Wide Range Of Movies
          </h2>
        </div>
        <div className="row my-1 align-items-center justify-content-center ">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {!isPending && !error && data && (
            <Videocard datas={filteredVideoCards} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Mainbody;
