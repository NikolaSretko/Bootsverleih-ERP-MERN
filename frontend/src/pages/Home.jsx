import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Home.scss";

const Home = () => {
  const [allBootsZahl, setAllBootsZahl] = useState(0);
  const [reserviertBootsZahl, setReserviertBootsZahl] = useState(0);
  const [verfügbarBootsZahl, setVerfügbarBootsZahl] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5555/api/v1/boot")
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) console.log(error);
        setAllBootsZahl(result.length);
        const reserviertBoots = result.filter(
          (boot) => boot.reservierungen[0].status === true
        );
        const verfügbareBoots = result.filter(
          (boot) => boot.reservierungen[0].status === false
        );
        setReserviertBootsZahl(reserviertBoots.length);
        setVerfügbarBootsZahl(verfügbareBoots.length);
      });
  }, []);
console.log(allBootsZahl);
  return (
    <section>
      <article className="dashBoard">
        <div>
          <h2>Aktuelle Reservierungen</h2>
          <h1>{reserviertBootsZahl} </h1>
        </div>
        <div>
          <h2>Verfügbare Boote</h2>
          <h1>{verfügbarBootsZahl}</h1>
        </div>
        <Link to="/gallery">
          <div>
            <h2>Gesamtanzahl Boote</h2>
            <h1>{allBootsZahl} </h1>
          </div>
        </Link>
      </article>
    </section>
  );
};

export default Home;
