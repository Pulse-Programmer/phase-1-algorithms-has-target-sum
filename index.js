function hasTargetSum(array, target) {
  for (let i = 1; i < array.length; i++) {
    let sum = array[0] + array[i];
    if (sum === target) {
      return true;
    }
  }
  if (array.length > 1) {
    array.shift(); //Removes the first element from the array
    return hasTargetSum(array, target); //recursive call to the altered array
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
  O(n)
*/

/*
  Add your pseudocode here:

  Add the first number in the array to all next elements in the array
  Iteratively/recursively move one index step forward and add the next number to the rest of the array elements.
  If sum of numbers is equal to target
     return true

  Return false if no sum matches the target
*/

/*
  Add written explanation of your solution here:
  The function loops across the array adding each array element to the other elements and checks if the sum
  matches the target. If not it recursively calls itself to check if there is a match and returns false if there
  is none.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
