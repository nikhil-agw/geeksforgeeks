/********************************************************************************************/
/*                                                                                          */
/*                                THE INVERTING FACTOR                                      */
/*                                                                                          */
/********************************************************************************************/

/* 
 * Ishaan being curious as always, was playing with numbers when he started to reversing the numbers. He invented something called the "inverting factor" of two numbers.
 * Inverting Factor of 2 integers is defined as the absolute difference between the reverse of the 2 integers.
 * Ishaan has an array A of N integers. He wants to find out the smallest possible Inverting Factor among all pairs of his integers. Help him find that.
 * Note : Trailing zeros in a number of ignored while reversing, i.e. 1200 becomes 21 when reversed.
 * 
 * Input : 
 * First line of input contains a single integer T denoting the number of test cases.
 * The first line of each test case contains an integer N.
 * The second line contains N space-separated integers denoting the array A.
 * 
 * Output : 
 * For each test case, print the required answer in a new line.
 * 
 * Constraints : 
 * 1 <= T <= 100
 * 2 <= N <= 1000
 * 1 <= A[i] <= 10^5
 * 
 * Example : 
 * Input : 
 * 3
 * 5
 * 56 20 47 93 45
 * 6
 * 48 23 100 71 56 89
 * 4
 * 26 15 45 150
 * Output : 
 * 9
 * 14
 * 0
 * 
 * Explanation : 
 * Case 1 : 
 * The minimum inverting factor is 9, of the pair (56,47)
 * 
 * Case 2 : 
 * The minimum inverting factor is 14, of the pair (48,89)
 * 
 * Case 3 : 
 * The minimum inverting factor is 0, of the pair (15,150)
 * 
 * 
**/

/********************************************************************************************/
/*                                                                                          */
/*                                          SOLUTION                                        */
/*                                                                                          */
/********************************************************************************************/

// Test Case 1
console.log(findInvertingFactor([56, 20, 47, 93, 45])); // The minimum inverting factor is 9, of the pair (56,47)
// Test Case 2
console.log(findInvertingFactor([48, 23, 100, 71, 56, 89])); // The minimum inverting factor is 14, of the pair (48,89)
// Test Case 3
console.log(findInvertingFactor([26, 15, 45, 150])); // The minimum inverting factor is 0, of the pair (15,150)

/* Function to find the inverting factor */
function findInvertingFactor(arr) {

    var obj = {};
    var n1, n2, dif = 99999999999; 
    for (let i = 0; i < arr.length; i++) {
        var nr = 0, n = arr[i];
        while(n > 0) {
            nr = nr * 10 + n%10;
            n = (n - n%10)/10;
        }
        if(obj[nr]) {
            n1 = obj[nr]; n2 = arr[i], dif = 0;
            break;
        } else {
            obj[nr] = arr[i];
        }
    }

    if(dif) {
        var arr1 = Object.keys(obj).sort((a,b) => a - b);  
        for(let i = 0; i < arr1.length - 1; i++) {
            if(arr1[i+1] - arr1[i] < dif) {
                n1 = obj[arr1[i]]; n2 = obj[arr1[i+1]]; dif = arr1[i+1] - arr1[i];
            }
        }
    }
    console.log("The minimum inverting factor is " + dif + ", of the pair (" + n1 + "," + n2 + ")");
}