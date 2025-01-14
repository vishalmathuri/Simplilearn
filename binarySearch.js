function binarySearch(arr, target) {
    let left = 0; // Initialize the left pointer
    let right = arr.length - 1; // Initialize the right pointer

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find the middle index

        if (arr[mid] === target) {
            return mid; // Target found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Narrow search to the right half
        } else {
            right = mid - 1; // Narrow search to the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
console.log(binarySearch(sortedArray, target)); // Output: 3
