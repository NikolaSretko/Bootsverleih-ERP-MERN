import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import './AddReservation.scss'
import 'react-datepicker/dist/react-datepicker.css';


const AddReservierung = () => {
  const [allBoot, setAllBoot] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedBoot, setSelectedBoot] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/v1/boot");
        const { success, result } = await response.json();
        if (success) {
          setAllBoot(result);
        }
      } catch (e) {
        console.error("Fehler beim Laden der Boote", e);
      }
    };

    fetchBoats();
  }, []);

  const addReservierung = async (e) => {
    e.preventDefault();
    if (selectedBoot) {
      setLoading(true);
      setMessage('');
      setError('');
      try {
        const res = await fetch(`http://localhost:5555/api/v1/boot/${selectedBoot}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              status: false,
              start: startDate.toISOString(),
              end: endDate.toISOString(),
          }),
        });
        const data = await res.json();
        if (res.ok) {
          console.log("Reservierung erfolgreich", data);
          const startFormat = startDate.toLocaleDateString('de-DE', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
          });
          const endFormat = endDate.toLocaleDateString('de-DE', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
          })
          setMessage(`Reservierung erfolgreich! Sie haben von ${startFormat} bis ${endFormat} gebucht. Sie erhalten in Kürze eine Bestätigungs-E-Mail.`);
        } else {
          console.error("Fehler beim Hinzufügen der Reservierung", data);
          setError(`Fehler beim Hinzufügen der Reservierung: ${data.message}`);
        }
      } catch (err) {
        console.error("Fehler beim Senden der Anfrage", err);
        setError(`Fehler beim Senden der Anfrage: ${err.message}`);
      }finally{
        setLoading(false);
      }
    }
  };

  const isDateAvailable = (date) => {
    if (!selectedBoot) return true; 
  
    const boot = allBoot.find((boot) => boot.id === selectedBoot);
    if (!boot || !boot.reservierungen || boot.reservierungen.length === 0) return true; 

    return !boot.reservierungen.some(reservierung => {
      const startReservierung = new Date(reservierung.start);
      const endReservierung = new Date(reservierung.end);
      return date >= startReservierung && date <= endReservierung;
    });
  };
  
  

  const handleSelectChange = (e) => {
    setSelectedBoot(e.target.value);

    setStartDate(new Date());
    setEndDate(new Date()); 
  };
  



  return (
    <div className="container">
    <form onSubmit={addReservierung}>
      <h1>Reservierung hinzufügen</h1>

      <div className="form-group">
        <label htmlFor="start">Startdatum:</label>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        filterDate={(date) => isDateAvailable(date)}
        dateFormat="P"
        dayClassName={(date) => isDateAvailable(date) ? 'available' : 'unavailable'}
/>
      </div>

      <div className="form-group">
        <label htmlFor="end">Enddatum:</label>
        <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        minDate={startDate}
        filterDate={(date) => isDateAvailable(date) && date >= startDate}
        dateFormat="P"
        dayClassName={(date) => isDateAvailable(date) && date >= startDate ? 'available' : 'unavailable'}
/>
      </div>
      <div className="form-group">
        <label htmlFor="boot">Boot auswählen:</label>
        <select id="boot" value={selectedBoot} onChange={handleSelectChange}>
        <option value="" disabled>Bitte wählen Sie ein Boot</option>
        {allBoot.map((boot) => (
        <option key={boot.id} value={boot.id}>
        {boot.name}
        </option>
        ))}
      </select>
      </div>

      <button type="submit">Reservierung hinzufügen</button>
    </form>
    <div>
      {loading && <p>Reservierung wird hinzugefügt...</p>}
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
    </div>
    </div>
  );
};

export default AddReservierung;
