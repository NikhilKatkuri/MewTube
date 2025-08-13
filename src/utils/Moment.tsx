const myMoment = (dateInput: string) => {
  const date = Number(dateInput ? new Date(dateInput) : new Date());
  return {
    format: function (): string {
      const now = Number(new Date());
      const diff = now - date; // difference in milliseconds
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30.4167);
      const year = Math.floor(months / 12);
      if (year > 0) {
        return `${year} year${year > 1 ? 's' : ''} ago`;
      } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
      } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
      } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else if (seconds > 0) {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
      } else {
        return `just now`;
      }
    },
  };
};

export default myMoment;
