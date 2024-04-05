function isPalindrome(word) {
  // Pseudocode:
  // Iterate from the beginning of the string to the middle of the string
  for (let i = 0; i < word.length / 2; i++) {
    // Compare the letter we're iterating over to the corresponding letter at the end of the string
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      // If the letters don't match, return false
      return false;
    }
  }

  // If we reach the middle, and all the letters match, return true
  return true;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
