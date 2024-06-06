//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  } 
//Sort each array in ascending order.
function sortAscendingOrder(numsArray) {
    let sortedArr = [];
    while (numsArray.length > 0) {
        sortedArr.push(findMinValue(numsArray));
        numsArray.splice(numsArray.indexOf(findMinValue(numsArray)), 1);
      } return sortedArr;
} 
//Sort each array in decending order.
function sortDescendingOrder(numsArray) {
    let sortedArr = [];
    while (numsArray.length > 0) {
        sortedArr.unshift(findMinValue(numsArray));
        numsArray.splice(numsArray.indexOf(findMinValue(numsArray)), 1);
    } return sortedArr;
} console.log(sortDescendingOrder(nums3));