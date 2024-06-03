import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const { trainerData, selectedTime } = location.state;

  return (
    <div>
      <h1>Booking Page</h1>
      <h2>Trainer: {trainerData.name}</h2>
      <p>Selected Time: {selectedTime}</p>
    </div>
  );
};

export default Booking;
