import { Link } from "react-router-dom";
import "./BootItem.scss";

const BootItem = ({
  name,
  bootsart,
  reservierungen,
  upload_img,
  id,
}) => {

  const naechsteReservierung = reservierungen?.length > 0 ? reservierungen[0] : null;
  

  const statusFarbe = naechsteReservierung ? (naechsteReservierung.status ? "orange" : "green") : "gray";
  

  const statusText = naechsteReservierung ? (naechsteReservierung.status ? "Nicht bestätigt" : "Bestätigt") : "Keine Reservierung";
  
  return (
    <Link to={`/details/${id}`}>
      <section className="itemWrapper">
        <div>
          <img
            className="galleryimg"
            src={`http://localhost:5555/api/v1/images/${upload_img}`}
            alt={bootsart}
          />
        </div>
        <article>
          <h2>{name}</h2>
          <h3>Bootsart: {bootsart} </h3>
          <article>
            <h3>Reservierstatus: <span style={{ color: statusFarbe }}>{statusText}</span></h3>
          </article>
        </article>
      </section>
    </Link>
  );
};

export default BootItem;
