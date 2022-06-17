  
/**
 * 进行数组求和
 * @param arr 目标数组
 */
export const sum = (arr) =>
	arr.reduce((total, currentValue) => total + currentValue, 0);


/**
 * 复制数组
 * @param arr 待复制数组
 */
export const copyArr = (arr) => {
	const result = [];
	arr.forEach((e) => {
		e.forEach((v) => {
			result.push(v);
		});
	});
	return result;
};


/**
 * 摘取数组的组合片段
 * @param arr 目标数组
 */
export const chooseCards = (
	arr
) => {
	const result = [];
	const allVals = Array(arr.length)
		.fill(0)
		.map((_v, i) => i);
	allErgodic(arr.length).forEach((e) => {
		const temp1 = [];
		const temp2 = [];
		e.forEach((v) => {
			temp1.push(arr[v]);
		});
		allVals.forEach((v) => {
			if (!e.includes(v)) {
				temp2.push(arr[v]);
			}
		});
		result.push([temp1, temp2]);
	});
	return result;
};

/**
 * 生成固定长度的序列
 * @param len 数组长度
 */
export const produceOrder = (len) =>
	Array(len)
		.fill(0)
		.map((_v, i) => i);
		

/**
 * 过滤数组的重复元素
 * @param arr 目标数组
 */
export function filterSameItem(arr) {
	const result = [];
	const filterFlags = [];

	for (let item of arr) {
		const flag = item.sort().toString();
		if (!filterFlags.includes(flag)) {
			filterFlags.push(flag);
			result.push(item);
		}
	}

	return result;
}

/**
 * 遍历数组的组合形式 （核心代码）
 * @param size 数组长度
 * @param len 组合大小
 */
export const ergodic = (size, len) => {
	const arr = produceOrder(len);
	const cards = [];

	(function $(arr, size, result) {
		if (size > arr.length) {
			return;
		} else if (size === arr.length) {
			cards.push(copyArr([result, arr]));
		} else {
			for (let i = 0; i < arr.length; i++) {
				const temp = copyArr([result]);
				temp.push(arr[i]);
				if (size === 1) {
					cards.push(temp);
				} else {
					const tempArr = copyArr([arr]);
					tempArr.splice(0, i + 1);
					$(tempArr, size - 1, temp);
				}
			}
		}
	})(arr, size, []);
	return cards;
};

/**
 * 遍历所有长度的组合
 * @param len 数组长度
 */
export const allErgodic = (len) => {
	const result = [];
	for (let i = 1; i <= Math.floor(0.5 * len); i++) {
		ergodic(i, len).forEach((e) => {
			result.push(e);
		});
	}
	return result;
};



class Logic {
	calc(arr, target) {
		const result = [];
		const val = chooseCards(arr);
		if(sum(arr) === target) {
			result.push(arr);
		}
		for (let item of val) {
			if (sum(item[0]) === target) {
				result.push(item[0]);
			}

			if (sum(item[1]) === target) {
				result.push(item[1]);
			}
		}

		return filterSameItem(result).sort(
			(m, n) => n.length - m.length
		);
	}
}

export class Mizhu {

    static getLogic = () => new Logic();

    
	static calc(arr, target = 13) {
		return new Logic().calc(arr, target);
	}
}

 

export class ZL {
	static getLogic = () => new Logic();

	static calc(arr) {
		const target = 36;
		const result = [];
		
		if (0 < target - sum(arr) && target - sum(arr) < 13) {
			result.push(arr);
		}
		
		
		const val = chooseCards(arr);
		
		if (sum(arr) === target) {
			result.push(arr);
		}
		
		for (let item of val) {
			if (0 < target - sum(item[0]) && target - sum(item[0]) < 13) {
				result.push(item[0]);
			}
		
			if (0 < target - sum(item[1]) && target - sum(item[1]) < 13) {
				result.push(item[1]);
			}
		}
		
		return filterSameItem(result)
			.sort((m, n) => n.length - m.length)
			.map((v) => [v, target - sum(v)]);
	}
}
