function areAnagrams(str1, str2) {
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters in both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(areAnagrams(string3, string4)); // Output: false
                                                                                                                             