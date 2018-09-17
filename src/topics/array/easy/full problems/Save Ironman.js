/********************************************************************************************/
/*                                                                                          */
/*                                      SAVE IRONMAN                                        */
/*                                                                                          */
/********************************************************************************************/

/* 
 * Jarvis is weak in computing palindromes for Alphanumeric characters.
 * While Ironman is busy fighting Thanos, he needs to activate sonic punch but Jarvis is stuck in computing palindromes.
 * You are given a string containing the alphanumeric character. Find whether the string is palindrome or not.
 * If you are unable to solve it then it may result in the death of Iron Man.
 * 
 * Input:
 * The first line of the input contains t, the number of test cases. Each line of the test case contains string 'S'.
 * 
 * Output:
 * Each new line of the output contains "YES" if the string is palindrome and "NO" if the string is not a palindrome.
 * 
 * Constraints:
 * 1<=t<=100
 * 1<=|S|<=100000
 * Note: Consider alphabets and numbers only for palindrome check. Ignore symbols and whitespaces.
 * 
 * Example:
 * Input:
 * 2
 * I am :IronnorI Ma, i
 * Ab?/Ba
 * 
 * Output:
 * YES
 * YES
 * 
**/

/********************************************************************************************/
/*                                                                                          */
/*                                          SOLUTION                                        */
/*                                                                                          */
/********************************************************************************************/

// Test Case 1
console.log(isPalindrome("I am :IronnorI Ma, i")); // YES
// Test Case 2
console.log(isPalindrome("* Ab?/Ba")); // YES

/* Function to check for palindrome */
function isPalindrome(str) {
    // Regex to match numbers and alphabets
    const regex = /^[0-9a-zA-Z]+$/;
    // The default assumes the string to be palindrome
    let result = "YES";
  
    // Loop through the characters of the string
    for(let start = 0, end = str.length -1; start <= end;) {
        // Get the start and end characters
        let s = str.charAt(start), e = str.charAt(end);
        // Check if both the charactes matches the regex
        if(s.match(regex) && e.match(regex)) {
            // If both the characters do not match, set result to NO and return
            if(s.toLowerCase() !== e.toLowerCase()) {
                result = "NO";
                break;
            }
            // If both are equal, adjust the start and end countes
            start++;
            end--;
        } else {
            // Adjust the start and end counters based on the regex
            if(!s.match(regex)) start++;
            if(!e.match(regex)) end--;
        }
    }
    return result;
}