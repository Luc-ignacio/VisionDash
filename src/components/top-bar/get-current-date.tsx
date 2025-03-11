import { useState } from "react";

export const GetCurrentDate = () => {
  const [today, setToday] = useState("");

  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  setToday(new Intl.DateTimeFormat("en-GB", options).format(date));

  return today;
};
