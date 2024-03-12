// const arr = [
// 	0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 11, 7, -1, -5, 23, 6, 2, 35, 6,
// 	3, 32,
// ]

const arr = [0, 3, 2, 5, 6, 8, 1]

let count = 0

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexMin = i // 0 1 2 3 4 5 6
		console.log(indexMin)
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexMin]) {
				indexMin = j
			}
			count += 1
		}
		let tmp = arr[i]
		arr[i] = arr[indexMin]
		arr[indexMin] = tmp
	}
	return arr
}

console.log(selectionSort(arr))
console.log('count=', count)
