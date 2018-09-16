/* QUESTION
 *
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

// Solution
var str = "I am :IronnorI Ma, i";
const regex = /^[0-9a-zA-Z]+$/;

var result = "YES";

for(let start = 0, end = str.length -1; start <= end;) {
  let s = str.charAt(start), e = str.charAt(end);
  if(s.match(regex) && e.match(regex)) {
    if(s.toLowerCase() !== e.toLowerCase()) {
      result = "NO";
      break;
    }
    start++;
    end--;
  } else {
    if(!s.match(regex)) start++;
    if(!e.match(regex)) end--;
  }
}

console.log(result);
