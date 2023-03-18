const binarySearch = (arr, target) => {
    //complexity here generally can be O(n log n) on average, but can be as bad as O(n^2) in the worst case
    //this where we have an issue if the array is unsorted
    // one can decide to implement a better way to sot
    const sortedArr = arr.sort((a, b) => a - b); // sort the array
    //console.log(sortedArr)
    
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left <= right) {
      const indexToCheck = (left + right) >> 1;
      const checking = sortedArr[indexToCheck];
  
      if (checking === target) {
        return indexToCheck;
      } else if (checking < target) {
        left = indexToCheck + 1;
      } else {
        right = indexToCheck - 1;
      }
    }
  
    return null;
  };
  
  const searchable = [2,-1,0,100,71, 22, 7, 8, 58, 1, 67, 94, 41, 28]; // Define an unsorted array to search
  const target = 41; // Define the target value to search for


  const targetIndex = binarySearch(searchable, target); // Call the binarySearch function to find the index of the target value within the sorted array
  console.log(`The target index is ${targetIndex}`); // Print the index of the target value to the console
