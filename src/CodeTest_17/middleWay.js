/**
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
middleWay([7, 7, 7], [3, 8, 0]) → [7, 8]
middleWay([5, 2, 9], [1, 4, 5]) → [2, 4]
 */

function middleWay(arrOne, arrTwo) {
	//  Code...
	let arr = new Array();
	arr[0] = arrOne[1];
	arr[1] = arrTwo[1];
	return arr;
}

exports.middleWay = middleWay;
