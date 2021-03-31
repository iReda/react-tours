import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toursArr, setToursArr] = useState([]);
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
  } else {
    return (
      <main>
        <Tours tours={toursArr} />
      </main>
    );
  }
}

export default App;
