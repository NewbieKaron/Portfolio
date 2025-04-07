import React, { useState } from 'react';

interface Shift {
  startTime: string;
  endTime: string;
  breakTime: number;
}

const WorkHoursCalculator = () => {
  const [shifts, setShifts] = useState<Shift[]>([{ startTime: '', endTime: '', breakTime: 60 }]);
  const [totalHours, setTotalHours] = useState<number>(0);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedShifts = [...shifts];
    updatedShifts[index] = { ...updatedShifts[index], [name]: value };
    setShifts(updatedShifts);
  };

  const addShift = () => {
    setShifts([...shifts, { startTime: '', endTime: '', breakTime: 60 }]);
  };

  const removeShift = (index: number) => {
    const updatedShifts = shifts.filter((_, i) => i !== index);
    setShifts(updatedShifts);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let total = 0;

    shifts.forEach(({ startTime, endTime, breakTime }) => {
      if (!startTime || !endTime) {
        alert('Please fill in both start and end time.');
        return;
      }

      const start = new Date(`2022-01-01T${startTime}:00`);
      const end = new Date(`2022-01-01T${endTime}:00`);

      if (end.getTime() < start.getTime()) {
        end.setDate(end.getDate() + 1);
      }

      let totalTime = (end.getTime() - start.getTime()) / 1000 / 60 / 60; 
      totalTime -= breakTime / 60; 

      total += totalTime;
    });

    setTotalHours(parseFloat(total.toFixed(2)));
  };

  return (
    <div>
      <h2>Work Hours Calculator</h2>
      <form onSubmit={handleSubmit}>
        {shifts.map((shift, index) => (
          <div key={index} className="mb-4">
            <div>
              <label htmlFor={`startTime-${index}`}>Start Time: </label>
              <input
                className='px-4 py-3 h-12 text-lg border border-gray-300 rounded-md'
                type="time"
                id={`startTime-${index}`}
                name="startTime"
                value={shift.startTime}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div>
              <label htmlFor={`endTime-${index}`}>End Time: </label>
              <input
                className='px-4 py-3 h-12 text-lg border border-gray-300 rounded-md'
                type="time"
                id={`endTime-${index}`}
                name="endTime"
                value={shift.endTime}
                onChange={(e) => handleInputChange(index, e)}
                required
              />
            </div>
            <div>
              <label htmlFor={`breakTime-${index}`}>Break Time (in minutes): </label>
              <input className='px-4 py-3 h-12 text-lg border border-gray-300 rounded-md'
                type="number"
                id={`breakTime-${index}`}
                name="breakTime"
                value={shift.breakTime}
                onChange={(e) => handleInputChange(index, e)}
                
              />
            </div>
            <div>
              <label>Month and Day: </label>
              <input className='px-4 py-3 h-12 text-lg border border-gray-300 rounded-md'
                type="string"
                min=""
              />
            </div>
            <button className='bg-red-500 mt-5' type="button" onClick={() => removeShift(index)}>
              Remove Shift
            </button>
          </div>
        ))}
        <button className='bg-green-500' type="button" onClick={addShift}>
          Add Another Shift
        </button>
        <br />
        <button type="submit">Calculate Total Hours</button>
      </form>

      <br />
      <h3>Total Worked Hours: {totalHours} hours</h3>
    </div>
  );
};

export default WorkHoursCalculator;
