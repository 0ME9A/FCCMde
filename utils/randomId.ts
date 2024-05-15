export default function randomId(length: number = 4): string {
  // Define a string containing all possible characters for the ID
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Initialize an empty string to store the result
  let result = "";

  // Loop 'length' times to generate each character of the ID
  for (let i = 0; i < length; i++) {
    // Generate a random index to select a character from 'characters' string
    const randomIndex = Math.floor(Math.random() * characters.length);

    // Add the randomly selected character to the result string
    result += characters.charAt(randomIndex);
  }

  // Return the final random ID
  return result;
}
