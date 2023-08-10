export function convertToUpper(text) {
    return text.toUpperCase();
  }
  
  export function convertToLower(text) {
    return text.toLowerCase();
  }
  
  export function clearText() {
    return "";
  }
  
  export function copyTextToClipboard(textAreaId) {
    const textArea = document.getElementById(textAreaId);
    const text = textArea.value;
  
    if (!navigator.clipboard) {
      console.warn("Clipboard API not supported in this browser.");
      return;
    }
  
    navigator.clipboard
      .writeText(text)
      .then(() => {
          textArea.select();
      })
      .catch((error) => {
        console.error("Copying to clipboard failed:", error);
      });
  }
  
  export function removeWhitespaceAndSpecialChars(text) {
    return text.replace(/\s+/g, " ").replace(/[^a-zA-Z ]+/g, "");
  }
  