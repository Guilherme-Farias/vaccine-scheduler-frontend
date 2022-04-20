export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
