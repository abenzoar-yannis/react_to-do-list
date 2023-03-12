/* Converts a date string to Unix timestamp */
export function unixTimestamp(date) {
  return parseInt(new Date(date).getTime());
}
