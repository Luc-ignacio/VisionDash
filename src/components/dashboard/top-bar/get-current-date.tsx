export const GetCurrentDate = () => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const today = new Intl.DateTimeFormat("en-GB", options).format(date);

  return today;
};
