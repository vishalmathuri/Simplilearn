function lengthOfLongestSubstring(s) {
    let maxLength = 0; // To store the maximum length of substring
    let start = 0; // Starting index of the current window
    const seen = new Map(); // Map to track characters and their last index

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already seen and is within the current window
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1; // Move the start to avoid the duplicate
        }

        // Update the character's last seen index
        seen.set(char, end);

        // Calculate the length of the current window
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // Output: 0
