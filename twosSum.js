function twoSum(nums, target) {
    const map = new Map(); // Create a map to store the difference and its index
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return the indices of the two numbers
        }
        
        map.set(nums[i], i); // Store the current number and its index in the map
    }
    
    return []; // Return an empty array if no solution is found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
