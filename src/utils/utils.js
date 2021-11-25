// Creates a random token for each book
export const generateToken = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// Gives the current date time
export const dateTime = () => {
  let date = new Date();
  return date.toLocaleString();
};
