import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import kalender from "../images/kalender.png";
import Calendar from 'react-calendar'; 
import './Detail.scss'

const Details = () => {
  const { bootId } = useParams(); 
  const [boot, setBoot] = useState({});
  
  
  useEffect(() => {
    if (!bootId) {
      console.log('Boot-ID fehlt.');
      return;
    }
    fetch(`http://localhost:5555/api/v1/boot/${bootId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Netzwerkantwort war nicht ok.');
        }
        return res.json();
      })
      .then(({ success, result, error }) => {
        if (success) {
          setBoot(result);
        } else {
          console.log(error || 'Ein unbekannter Fehler ist aufgetreten.');
        }
      })
      .catch((error) => {
        console.error('Fehler beim Abrufen der Boot-Details:', error);
      });
  }, [bootId]);

  return (
    <div className="container_details">
      <h1>Detail-Seite</h1>
      {
  boot.upload_img && (
    <img
      src={`http://localhost:5555/api/v1/images/${boot.upload_img}`}
      alt={boot.bootsart}
    />
  )
}

      <h3>{boot?.bootsart}</h3> 
      <h2>{boot?.name}</h2>
      <p>Seriennummer: {boot?.seriennummer}</p> 
      <p>Baujahr: {boot?.baujahr}</p>
      <p>Material: {boot?.material}</p>

      <h4>Reservierungen</h4>
      <div className="res_container">
        {boot.reservierungen?.length > 0 ? (
          <Link to='/new-reservation'>
          <ul>
            {boot.reservierungen.map(reservierung => (
              <li key={reservierung._id}>
                Reserviert von: {reservierung.start.slice(0, 10)} bis {reservierung.end.slice(0, 10)}
              </li>
            ))}
          </ul>
          </Link>
        ) : (
          <Link to="/new-reservation">
            <img src={kalender} alt="kalender" className="img_detail"/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Details;
