const encodingScheme = {
  '🍔': 'burger',
  '🍟': 'fries',
  '🍕': 'pizza',
  '✈️': 'airplane',
  '🛳️': 'cruise ship',
  '🗺️': 'map',
  '😄': 'happy',
  '🥹': 'sad',
  '🤔': 'thinking',
};

function DecryptingEmojiCode(text, encodingScheme) {
  // Regular expression to match emojis
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

  // Replace emojis in the text with their corresponding words/phrases
  const decryptedText = text.replace(emojiRegex, (emoji) => {
    // Check if the emoji exists in the encoding scheme
    if (encodingScheme[emoji]) {
      return encodingScheme[emoji];
    } else {
      // If the emoji is not found, return the original emoji
      return emoji;
    }
  });

  return decryptedText;
}

export default DecryptingEmojiCode;


// Sample inputs
const input1 = "I'm feeling 🤔 about the upcoming ✈️ trip. Will we see 🗺️ landmarks?";
const input2 = "🥷🏼! 🎊 for the 🥷🏼 birthday surprise! ☄️ to the party place!";

// Decode the Emoji Code using the provided encoding scheme
console.log(decryptEmojiCode(input1, encodingScheme));
console.log(decryptEmojiCode(input2, encodingScheme));