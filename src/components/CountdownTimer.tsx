import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const getSecondsUntilNextMidnightGMT = () => {
    const now = new Date();
    const currentTimeInSeconds =
      now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
    const secondsInADay = 24 * 60 * 60;
    return secondsInADay - currentTimeInSeconds;
  };

  const [time, setTime] = useState(getSecondsUntilNextMidnightGMT());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) =>
        prevTime > 0 ? prevTime - 1 : getSecondsUntilNextMidnightGMT()
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeParts = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = getTimeParts(time);

  return (
    <div className="bg-lightGreen shadow-md shadow-gray-300 rounded-xl p-8 flex items-center justify-around text-8xl font-bold gap-12 max-w-[700px] mx-auto m-8">
      <div className="flex flex-col items-center justify-center">
        <p className="">{hours.toString().padStart(2, "0")}</p>
        <span className="text-sm">Horas</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="">:</span>
        <span className="text-sm"></span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="">{minutes.toString().padStart(2, "0")}</p>
        <span className="text-sm">Horas</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="">:</span>
        <span className="text-sm"></span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="">{secs.toString().padStart(2, "0")}</p>
        <span className="text-sm">Horas</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
