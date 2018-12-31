/********************************************************************************************/
/*                                                                                          */
/*                              ADITYA AND HIS BUILDING BLOCKS                              */
/*                                                                                          */
/********************************************************************************************/

/*
 * Aditya has arranged some of his building blocks in N columns. Each column has a certain number of blocks given by an array A.
 * Each element of A(i.e. Ai) is the height of the ith column. Aditya now has M blocks left. He doesn't like small columns.
 * So he wants to maximum the minimum of all heights. He may or may not use all of the M blocks.
 * Determine the maximised height.
 * 
 * Input : 
 * First line of input contains a single integer T denoting the number of test cases.
 * The first line of each test case contains 2 space-separated integers N and M denoting number of columns and  number of blocks left respectively.
 * The second line contains N space-separated integers A1,A2,A3,...,AN denoting the heights of the columns.
 * 
 * Output : 
 * For each test case, print the required answer in a new line.
 * 
 * Constraints : 
 * 1 <= T <= 100
 * 1 <= N <= 200
 * 1 <= M <= 10^4
 * 1 <= Ai <= 10^4
 * 
 * Example : 
 * Input : 
 * 3
 * 5 6
 * 1 2 3 4 5
 * 3 4
 * 2 8 9
 * 6 3
 * 1 1 2 2 1 2
 * Output : 
 * 4
 * 6
 * 2
 * 
 * Explaination : 
 * Case 1 : Final heights of blocks - 4 4 4 4 5
 * Case 2 : Final heights of blocks - 6 8 9
 * Case 3 : Final heights of blocks - 2 2 2 2 2 2
 * 
**/

/********************************************************************************************/
/*                                                                                          */
/*                                          SOLUTION                                        */
/*                                                                                          */
/********************************************************************************************/

// Test Case 1
console.log(buildBlocks([1, 2, 3, 4, 5], 6)); // [4,4,4,4,5]
// Test Case 2
console.log(buildBlocks([2, 8, 9], 4)); // [6,8,9]
// Test Case 3
console.log(buildBlocks([1, 1, 2, 2, 1, 2], 3)); // [2,2,2,2,2,2]

function buildBlocks(arr, n) {
	arr.sort((a,b) => a-b);
  	while (n > 0) {
    	let smallest = arr[0];
    	let index = arr.findIndex(v => v > smallest);
    	let diff = arr[index] - smallest;
    	if(index !== -1) {
      		if(n >= diff * index) {
        		for (let i = 0; i < index; i++) {
          			arr[i] += diff; n -= diff;
        		}
      		} else if (index === 1) {
        		arr[0] += n; n = 0;
      		} else break;
    	}  else break;
  	}
  	return arr;
}