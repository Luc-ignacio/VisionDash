export const GetCurrentDate = () => {
  const getFormattedDate = () => {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    return formattedDate.replace(
      /\b(\d{1,2})\b/,
      (day) => `${day}${getOrdinalSuffix(Number(day))}`
    );
  };

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const today = getFormattedDate();

  return today;
};
