const encodingScheme = {
  '🗺️': 'map',
  '🍔': 'burger',
  '✈️': 'airplane',
  '🍟': 'fries',
  '🍕': 'pizza',
  '🛳️': 'cruise ship',
  '😄': 'happy',
  '🥹': 'sad',
  '🤔': 'thinking',
};

// Regex pattren
const emojiRegexes = {
  Miscellaneous: /[\u{1F300}-\u{1F5FF}]/gu, // Miscellaneous Symbols and Pictographs
  Emotions: /[\u{1F600}-\u{1F64F}\u{1F910}-\u{1F92F}\u{1F600}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, // Emoticons
  Transport: /[\u{1F680}-\u{1F6FF}]/gu, //Transport and Map Symbols
  TravelSymbols: /[\u{1F680}-\u{1F6FF}\u{1F300}-\u{1F5FF}]/gu, // Travel symbols
  Symbols: /[\u{2600}-\u{26FF}]/gu, // Miscellaneous Symbols
  Dingbats: /[\u{2700}-\u{27BF}]/gu, // Dingbats
};

function DecryptingEmojiCode(text) {
  const emojiRegex = new RegExp(
    `(${emojiRegexes.Miscellaneous.source}|${emojiRegexes.Emotions.source}|${emojiRegexes.Transport.source}|${emojiRegexes.Symbols.source}|${emojiRegexes.Dingbats.source}|${emojiRegexes.TravelSymbols.source})`,
    'gu',
  );

  // Ganti emoji di teks dengan kata/frasa yang sesuai
  const decryptedText = text.replace(emojiRegex, (match) => {
    // Periksa apakah emoji ada dalam skema pengkodean
    return encodingScheme[match] || match;
  });

  return decryptedText; // return decryptedText
}

export default DecryptingEmojiCode;  // export fungsi untuk digunakan di luar modul


// // Sample inputs
// const input1 = "I'm feeling 🤔 about the upcoming ✈️ trip. Will we see 🗺️ landmarks?";
// // const input2 = "🥷🏼! 🎊 for the 🥷🏼 birthday surprise! ☄️ to the party place!";

// // Decode the Emoji Code using the provided encoding scheme
// console.log(DecryptingEmojiCode(input1));
// // console.log(DecryptingEmojiCode(input2));















// ref
// https://getemoji.com/
// https://regex101.com/
// https://stackoverflow.com/questions/22006218/replace-emoji-unicode-symbol-using-regexp-in-javascript
