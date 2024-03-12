const arr = [0, 3, 2, 5, 6, 8, 1]
let count = 0

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j + 1] < arr[j]) {
				let tmp = arr[j] // создаем времен. переменн. и кладем элемент текущей итерации
				arr[j] = arr[j + 1]
				arr[j + 1] = tmp
			}
			count += 1
		}
	}
	return arr
}

console.log('arr.length=', arr.length)
console.log(bubbleSort(arr))
console.log(count) // долгая сортировка
