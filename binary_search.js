const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

let count = 0

function binarySearch(arr, item) {
	let start = 0
	let finish = arr.length - 1

	while (start <= finish) {
		count += 1
		middle = Math.floor((start + finish) / 2)
		if (arr[middle] === item) {
			return middle
		} else if (arr[middle] < item) {
			start = middle + 1
		} else {
			finish = middle - 1
		}
	}
	return -1
}

console.log(binarySearch(arr, 11))
console.log(count)
