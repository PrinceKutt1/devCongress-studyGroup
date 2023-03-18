
/**

This function assumes that the input array is already sorted. It implements the binary search algorithm

which is a fast way of finding the index of a target value in a sorted array.

@param {Array} arr -  sorted array to search.

@param {*} target -  value to search for.

@returns {number|null} -  index of the target value in the array, or null if it is not found.
*/
const binarySearch = (arr, target) => {
    // Initialize the left and right pointers to the start and end of the array.
    let left = 0;
    let right = arr.length - 1;
    
    // While the search range is not empty, keep dividing it in half.
    while (left <= right) {
    // Calculate the middle index using bit shifting, which is faster than dividing by 2, since it manipulates binary digits
    // directly rather than performing division. This optimization, i think will become more significant as the size of the array grows.
    const indexToCheck = (left + right) >> 1;
    // Get the value at the middle index.
    const checking = arr[indexToCheck];
    
    // If the value matches the target, return the index.
    if (checking === target) {
    return indexToCheck;
    } else if (checking < target) {
    // If the value is less than the target, narrow the search range to the right half of the array.
    left = indexToCheck + 1;
    } else {
    // If the value is greater than the target, narrow the search range to the left half of the array.
    right = indexToCheck - 1;
    }
    }
// If the target value is not found in the array, return null.
return null;
}
const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94]; // Define an array to search
const target = 41; //  the target value to search for
const targetIndex = binarySearch(searchable, target); // Call the binarySearch function to find the index of the target value within the array
console.log(`The target index is ${targetIndex}`); // Print the index of the target value to the console
