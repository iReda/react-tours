import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toursArr, setToursArr] = useState([]);
  const removeTour = (id) => {
    const newTours = toursArr.filter((tour) => tour.id !== id);
    setToursArr(newTours);
  };

  const fetchTours = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setToursArr(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours(url);
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (toursArr.length === 0 && isLoading === false) {
    return (
      <main>
        <section>
          <div className="title">
            <h2>No more tours</h2>
            <div className="underline"></div>
            <button className="btn" onClick={(e) => fetchTours(url)}>
              Refresh
            </button>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={toursArr} removeTour={removeTour} />
    </main>
  );
}

export default App;
