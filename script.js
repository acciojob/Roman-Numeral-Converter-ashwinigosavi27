function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let ans = 0
    for (let i = obj.length-1; ~i; i--) {
        let num1 = num[obj.charAt(i)]
        if (4 * num1 < ans) ans -= num1
        else ans += num1
    }
    return ans

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
