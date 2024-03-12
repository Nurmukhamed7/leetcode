const arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let count = 0
function linearSearch(arr, item) {
	for (i = 0; i < arr.length; i++) {
		count += 1
		if (arr[i] === item) {
			return i
		}
	}
	return console.log('такого нету')
}

const result = linearSearch(arr, 7)
console.log(result)
console.log(count)
