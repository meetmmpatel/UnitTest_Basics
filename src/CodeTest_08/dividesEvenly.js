/**
 Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

Examples
dividesEvenly(98, 7) ➞ true
# 98/7 = 14

dividesEvenly(85, 4) ➞ false
# 85/4 = 21.25


Notes
a will always be greater than or equal to b.
 */

function dividesEvenly(a, b) {
	//code...

	let result = (a % b) / 100;
	if (Number.isInteger(result)) {
		return true;
	} else {
		return false;
	}
}

exports.dividesEvenly = dividesEvenly;
