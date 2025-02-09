import { useEffect, useState } from "react";
import EventCard from "../../components/user/EventCart";
import { useProductContext } from "../../context/ProductContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Event = () => {
  const { events, fetchEvents } = useProductContext();
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format

      const filtered = events.filter((event) => 
        event.date.split("T")[0] === formattedDate
      );

      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events); 
    }
  }, [selectedDate, events]);

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>

      {/* Date Picker for Filtering Events */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Filter Events by Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="p-2 border rounded-md w-full md:w-64"
          dateFormat="yyyy-MM-dd"
          isClearable
          placeholderText="Select a date"
        />
      </div>

      {/* Display Filtered Events */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No events found for the selected date.</p>
      )}
    </div>
  );
};

export default Event;
