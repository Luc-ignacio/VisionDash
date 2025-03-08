import { Calendar } from "lucide-react";

export const TopBar = () => {
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

  return (
    <div className="border-b border-gray-300 px-4 mb-4 mt-2 pb-4">
      <div className="flex items-center justify-between p-1">
        <div className="flex gap-4">
          <div>
            <span className="text-sm font-semibold block">Hello, Lucas!</span>
            <span className="text-xs text-gray-900 block">{today}</span>
          </div>
        </div>

        <div>
          <button className="flex text-sm items-center gap-2 bg-gray-300/50 transition-colors hover:text-pumpkin px-3 py-2 rounded cursor-pointer">
            <Calendar size={18} />
            <span>Previous 6 months</span>
          </button>
        </div>
      </div>
    </div>
  );
};
