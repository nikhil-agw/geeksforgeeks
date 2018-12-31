/********************************************************************************************/
/*                                                                                          */
/*                                    PASS THE SEMESTER                                     */
/*                                                                                          */
/********************************************************************************************/

/*
 * Satish wants to prepare for tommorow's exam . He knows the distribution of marks for the subject along with time to learn the concepts.
 * You are given remaining time for the exam along with marks for each topic and passing marks for the subject.
 * Find the max marks Satish can attain by studing max no of topic in max no hours not excedding (p) .
 * 
 * Input:
 * 
 * The first line of input contains the number of testcases t.
 * The first line of each testcase contains the no of topics(n) , time remaining for exam(h) in hour and passing marks(p).
 * Each 'n' lines contain u(time to learn topic) and v(weightage of topic in exam) .
 * 
 * Output:
 * 
 * For each test case print "YES" along with time taken or "NO".  
 * 
 * Constraints:
 * 
 * 1<=t<=100
 * 
 * 1<=n<=300
 * 
 * 1<=h<=150
 * 
 * 1<=p<=35
 * 
 * 1<=u,v<=25
 * 
 * Example:
 * Sample Input 0
 * 1
 * 5 40 21 
 * 12 10 
 * 16 10 
 * 20 10 
 * 24 10 
 * 8 3 
 * 
 * Sample Output 0 
 * YES 36
 * 
 * Explaination :
 * 
 * Marks needed to pass the subject  10 +10 + 3 = 23
 * 
 * Time taken to achieve the 23 marks : 12 + 6 + 8 =36
 * 
**/

/********************************************************************************************/
/*                                                                                          */
/*                                          SOLUTION                                        */
/*                                                                                          */
/********************************************************************************************/

let totalTime = 40;
let passingMarks = 21;
let topics = [{
  	"marks" : 10,
  	"time" : 12
}, {
  	"marks" : 10,
  	"time" : 16
}, {
  	"marks" : 10,
  	"time" : 20
}, {
  	"marks" : 10,
  	"time" : 24
}, {
  	"marks" : 3,
  	"time" : 8
}];
topics.forEach(o => o.efficiency = o.marks / o.time);
topics.sort((a,b) => b.efficiency - a.efficiency);

// Test Case 1
console.log(willPass(topics, totalTime, passingMarks)); // {"valid": true, "time": 36, "marks": 23}

function willPass(arr, time, marks, myTime = 0, myMarks = 0) {
  	let resultObj = {
    	"valid" : false
  	};
  	for (let o of arr) {
    	if(time - o.time >= 0 && marks - o.marks <= 0) {
      		resultObj.valid = true;
      		resultObj.time = myTime + o.time;
	      	resultObj.marks = myMarks + o.marks;
	      	break;
	    } else if (time - o.time <= 0) {
	      	continue;
	    } else {
	      	let temp = [...arr];
	      	temp.shift();
	      	resultObj = willPass(temp, time - o.time, marks - o.marks, myTime + o.time, myMarks + o.marks);
	      	if(resultObj.valid) break;
	    }
	}
	return resultObj;
}