import React, { useState, useEffect } from "react";

// demonstration of react functionality
const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <>
      <p>It is {date.toLocaleTimeString()}</p>
    </>
  );
};

export default Clock;
