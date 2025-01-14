function countPalindromicSubstrings(s) {
    let count = 0;

    // Helper function to expand around the center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++; // Increment the count for a palindrome
            left--;  // Expand to the left
            right++; // Expand to the right
        }
    }

    // Iterate over each character as a potential center
    for (let i = 0; i < s.length; i++) {
        // Odd-length palindromes (single character center)
        expandAroundCenter(i, i);

        // Even-length palindromes (two character center)
        expandAroundCenter(i, i + 1);
    }

    return count;
}

// Example usage:
console.log(countPalindromicSubstrings("aaa")); // Output: 6 ("a", "a", "a", "aa", "aa", "aaa")
console.log(countPalindromicSubstrings("abc")); // Output: 3 ("a", "b", "c")
console.log(countPalindromicSubstrings("racecar")); // Output: 10
console.log(countPalindromicSubstrings("")); // Output: 0
