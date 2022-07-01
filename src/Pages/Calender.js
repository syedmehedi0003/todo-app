import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// function Component() {
//   return <DayPicker />;
// }

const Calender = () => {
    // const [selected, setSelected] = React.useState < Date > ();
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className='flex justify-center items-center'>
                <DayPicker

                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />;
            </div>
            <p className='text-center'>You have selected: {format(date, 'PP')}</p>
        </div>
    );
};

export default Calender;