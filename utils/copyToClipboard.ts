export default async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard:", text);
    return true;
  } catch (err) {
    console.error("Unable to copy text to clipboard:", err);
    return false;
  }
}

//   // Example usage
//   const textToCopy = 'Hello, world!';
//   copyToClipboard(textToCopy);
