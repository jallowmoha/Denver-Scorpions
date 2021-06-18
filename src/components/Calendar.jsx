import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
export const PageCalendar = () => {
    const [value, setValue] = useState(new Date());
    return (
        <div className="calendar">
            <Calendar
                setValue={setValue}
                value={value}
            />
            
        </div>
    )
}
