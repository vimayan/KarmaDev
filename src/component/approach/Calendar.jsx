import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
function DateCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <  >
      <Calendar onChange={onChange} value={value} />
    </>
  );
}
export default DateCalender;
