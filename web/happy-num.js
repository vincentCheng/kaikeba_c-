'use strict'

/**
 * 这是老师给出的计算方法。不使用链表。
 * @param {*} n 
 * @returns 
 */
var isHappy = function (n) {
	if (n === 1 || n === 7) {
		return true
	} else if (n < 10) {
		return false
	}
	let narr = (n + '').split(''), sum = 0
	for (let i = 0; i < narr.length; i++) {
		sum = narr[i] * narr[i] + sum
	}
	return isHappy(sum)
};

var isHappyOld = function (n) {
	let pre = n, cur = getNext(n);
	while (cur !== 1 && pre !== cur) {
		pre = getNext(pre);

		const tempCur = getNext(cur);
		cur = getNext(tempCur);
	}

	return cur === 1;
};

var fn = function fun(n, s = 0) {
	if (!n || n === 0) {
		console.log({ n, s })
		return s;
	}
	let sum = s;
	// 得到最后的那个数字
	const lastNum = n % 10;
	// 得到剩下的数字
	const tempNum = Math.floor(n / 10);
	// 平方求和
	sum += lastNum * lastNum;
	console.log({ tempNum, lastNum })
	// 递归
	fun(tempNum, sum);
}
var getNextFive = fn;
fn = null;

var getNextFour = function (n, s = 0) {
	if (!n || n === 0) {
		console.log({ n, s })
		return s;
	}
	let sum = s;
	// 得到最后的那个数字
	const lastNum = n % 10;
	// 得到剩下的数字
	const tempNum = Math.floor(n / 10);

	// 平方求和
	sum += lastNum * lastNum;
	console.log({ lastNum, tempNum })
	// 递归
	arguments.callee(tempNum, sum);
};
var getNextThree = (function () {
	// 'use strict'
	return function fun(n, s = 0) {
		if (!n || n === 0) {
			console.log({ n, s })
			return s;
		}
		let sum = s;
		// 得到最后的那个数字
		const lastNum = n % 10;
		// 得到剩下的数字
		const tempNum = Math.floor(n / 10);
		// 平方求和
		sum += lastNum * lastNum;

		console.log({ tempNum, lastNum })
		// 递归
		fun(tempNum, sum);
	}
})();
var getNextTwo = function (n, s = 0) {
	if (!n || n === 0) {
		console.log({ n, s })
		return s;
	}
	let sum = s;
	// 得到最后的那个数字
	const lastNum = n % 10;
	// 得到剩下的数字
	const tempNum = Math.floor(n / 10);

	// 平方求和
	sum += lastNum * lastNum;
	console.log({ lastNum, tempNum })
	// 递归
	this.getNext(tempNum, sum);
};
var getNextOld = function (n) {
	let sum = 0;
	while (n) {
		sum += (n % 10) * (n % 10);
		// 比 n/10 小的数中，取最大的那个整数。
		// 也叫作“下舍整数”。
		// n 有可能是0。
		// 为什么要这样？直接 n/10 就可以了啊。
		// 为了最终跳出循环。
		n = Math.floor(n / 10);
		// 但是教程中没有下面这一步啊。
		// if (n <= 9) {
		// 		break;
		// }
		console.log('data', { sum, n });
	}
	return sum;
};
// console.log(isHappy(3));
console.log(isHappy(10086));
// console.log(3/10)
// console.log(3%10)