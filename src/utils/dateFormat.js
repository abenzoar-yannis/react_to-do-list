/* Formats a date to a readable string in French */
export function dateFormat(date) {
  const newDate = new Date(date);
  const day = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  const month = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const dayOfWeek = day[newDate.getDay()];
  const dayOfMonth = newDate.getDate();
  const monthOfYear = month[newDate.getMonth()];
  const year = newDate.getFullYear();
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();

  // Returns the formatted date string
  const dateFormatee = `${dayOfWeek} ${dayOfMonth} ${monthOfYear} ${year} à ${hour}H${
    minute >= 10 ? minute : "0" + minute
  }`;

  return dateFormatee; // Example output: "ven. 10 mars 2023 à 14H50"
}
