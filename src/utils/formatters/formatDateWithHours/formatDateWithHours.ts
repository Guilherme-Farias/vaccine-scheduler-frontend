export const formatDateWithHours = (date: string) =>
  new Date(date).toLocaleDateString('pt-br', {
    minute: '2-digit',
    hour: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
