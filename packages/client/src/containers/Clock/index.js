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
      <h2>It is {date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
