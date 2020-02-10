/**
 Given an variable  n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
diff21(25) → 8
diff21(-1) → 22
 */

function diff21(n) {
	//  Code ....
	if (n > 21) {
		return (n - 21) * 2;
	} else {
		return 21 - n;
	}
}

exports.diff21 = diff21;
