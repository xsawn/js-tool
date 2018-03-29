let suanFa = {

	swap: function(i, j, arr) {
		let tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	},
	// 冒泡排序
	// 依次对比相邻项， 大数交换到右边
	bubbleSort: function(arr) {
		for(let i = 0, len = arr.length; i < len - 1; i++) {
			let flag = false;
			for(let j = 0, len = arr.length; j < len - 1 - i; j++) {
				if(arr[j] > arr[j + 1]) {
					this.swap(j, j + 1, arr);
					flag = true;
				}
			}
			if(!flag) break;
		}
		return arr;
	},
	// 选择排序
	// 依次选出最小项， 从左侧开始排序
	selectSort: function(arr) {
		for(let i = 0, len = arr.length; i < len; i++) {
			let index = i;
			for(let j = i + 1, len = arr.length; j < len; j++) {
				if(arr[index] > arr[j]) {
					index = j
				}
			}
			this.swap(i, index, arr)
		}
		return arr
	},	
	// 快速排序
	quickSort: function(arr) {
		if(arr.length <= 1) return arr
		let tmp = arr[0],
			left = [],
			right = [];
		for(let i = 1, len = arr.length; i < len; i++) {
			if(arr[i] > tmp) {
				right.push(arr[i])
			} else if(arr[i] < tmp) {
				left.push(arr[i])
			}
		}
		return suanFa.quickSort(left).concat([tmp], suanFa.quickSort(right))
	}
}
console.log('load success')