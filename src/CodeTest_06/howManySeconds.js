/**
 Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200
howManySeconds(10) ➞ 36000
howManySeconds(24) ➞ 86400

Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer.
 */

function howManySeconds(hours) {
	//code ....
	let result = hours * 60 * 60;
	return result;
}

exports.howManySeconds = howManySeconds;