/********************************************************************************************/
/*                                                                                          */
/*                                 SUM OF XOR OF ALL PAIRS                                  */
/*                                                                                          */
/********************************************************************************************/

/*
 * Given an array of N integers, find the sum of xor of all pairs of numbers in the array.
 * 
 * Input:
 * The first line of the input contains a single integer T denoting the number of test cases. The first line of each test case contains N. followed by n separate integers. 
 * 
 * Output:
 * For each test case, output a single integer i.e sum of xor of all pairs of numbers in the array.
 * 
 * Constraints
 * 1 = T = 1000
 * 2 = N = 10^5
 * 1 = A[i] = 10^5
 * 
 * Example:
 * Input :
 * 2
 * 3
 * 7 3 5
 * 4
 * 5 9 7 6
 * Output :
 * 12
 * 47
 * 
**/

/********************************************************************************************/
/*                                                                                          */
/*                                          SOLUTION                                        */
/*                                                                                          */
/********************************************************************************************/

// Test Case 1
console.log(sumOfXors([7, 3, 5])); // 12
// Test Case 2
console.log(sumOfXors([5, 9, 7, 6])); // 47

/* Function to sum xors of all pairs */
function sumOfXors(arr) {
	/* For first number xor with all the subsequent numbers and add to total sum.
	 * Now start with second number and repeat the process and so on. */
    return arr.reduce((a, c, i, array) => {
	  for (let j = i+1; j < array.length; j++) {
	    a += c ^ array[j];
	  }
	  return a;
	}, 0);
}