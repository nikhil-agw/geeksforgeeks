/* QUESTION
 *
 * Charul has been given a task by Ishaan. He challenges him to fill a large container of capacity K litres. Charul has N vessels with him with diiferent capacities.
 * The capacities of the vessels are given by an array A. The condition is that the container should be filled upto the brim but no water should be wasted in overflowing. Also, the vessels can't be filled partially.
 * Determine if Charul can fill up the container with the given conditions or not.
 * Assume that Charul has unlimited supply of water.
 * 
 * Input : 
 * First line of input contains a single integer T denoting the number of test cases.
 * The first line of each test case contains 2 space-separated integers N and K.
 * The second line contains N space-separated integers denoting the array A.
 * 
 * Output : 
 * For each test case, print "1" if it is possible, else print "0" in a new line (without quotes "").
 * 
 * Constraints : 
 * 1 <= T <= 100
 * 1 <= N <= 100
 * 1 <= K <= 10^3
 * 1 <= A[i] <= 100
 * 
 * Example : 
 * Input : 
 * 3
 * 5 20
 * 6 3 4 2 1
 * 3 15
 * 2 4 3
 * 4 10
 * 8 3 12 6
 * Output : 
 * 1
 * 1
 * 0
 * 
 * Explanation : 
 * Case 1 : 
 * The container can be filled in the following manner : 
 * Add water using the 6 litre vessel 3 times : Container filled upto 18 litres
 * Add water using the 2 litre vessel 1 time : Container filled upto 20 litres
 * 
 * Case 2 : 
 * The container can be filled in the following manner : 
 * Add water using the 3 litre vessel 5 times : Container filled upto 15 litres
 * 
 * Case 3 : 
 * The container can't be filled upto 10 litres using the given vessels.
 * 
 * 
**/

// Solution
let arr = [6,4,3,2];
var num = 23;

arr.sort((a,b) => b-a);

function getMatch(a, n) {
  let match = 0;
  for (let i = 0; i < a.length; i++) {
    if(a[i] > n) continue;
    let r = n%a[i];
    if(r === 0) {
      match = 1;
      break;
    } else {
      let q = (n-r)/a[i];
      match = (new Array(q)).reduce((a,c, i) => a || getMatch(a.slice(i+1), n-(i+1)*a[i]), match)
      match = match || getMatch(a.slice(i+1), r);
    }
  }
  return match;
}

console.log(getMatch(arr, num));