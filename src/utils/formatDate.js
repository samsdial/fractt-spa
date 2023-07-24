export function formatDate(dateTimeString) {
  const date = new Date(dateTimeString);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `Fecha:${formattedDate} Hora: ${formattedTime}`;
}
