// find
// const users = [
// 	{ id: 1, name: 'John', age: 30 },
// 	{ id: 2, name: 'Jane', age: 25 },
// 	{ id: 3, name: 'Doe', age: 35 },
// ]

// const findUserById = checkId => {
// 	return users.find(user => user.id === checkId)
// }

// console.log(findUserById(1))

// const arr = [1, 2, 3, 4, 5]
// const elem = arr.find(item => {
// 	return true
// })
// console.log(elem)

// map
// const users = [
// 	{ name: 'Alice', age: 25, email: 'alice@example.com' },
// 	{ name: 'Bob', age: 17, email: 'bob@example.com' },
// 	{ name: 'Charlie', age: 20, email: 'charlie@example.com' },
// 	{ name: 'David', age: 15, email: 'david@example.com' },
// ]

// const usersElder = users
// 	.filter(user => user.age <= 18)
// 	.map(user => `${user.name}: ${user.email}`)
// console.log(usersElder)
// "Имя пользователя: email"
// reduce

// filter
// const users = [
// 	{ id: 1, name: 'Alice' },
// 	{ id: 2, name: 'Bob' },
// 	{ id: 3, name: 'Charlie' },
// ]

// const newUsers = users.filter(item => {
// 	return item
// })
// console.log(newUsers)

// push
const users = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
	{ id: 3, name: 'Charlie' },
]

const newUsers = users.unshift(123)
// console.log(users)
// console.log(newUsers)
// push
// const showPush = users.pop()
// console.log(users)
// console.log(showPush)

// shift
// const showShift = users.shift()
// console.log(users)
// console.log(showShift)

// concat
// const users2 = [
// 	{ id: 56, name: 'Nur' },
// 	{ id: 5, name: 'Dayana' },
// 	{ id: 6, name: 'Asyl' },
// ]
// const showConcat = users2.concat(users)
// console.log(users)

// const arrays = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ]
// const concatenatedArray = arrays.reduce((acc, current) => {
// 	return acc.concat(current)
// }, [])

// console.log(concatenatedArray)

// const arrays = [['apple', 'banana'], ['orange', 'grape'], ['pineapple']]

// const showConcat = arrays.reduce((acc, item) => {
// 	return acc.concat(item)
// })
// console.log(showConcat)

// const arrays = [
// 	[
// 		{ id: 1, name: 'Alice' },
// 		{ id: 2, name: 'Bob' },
// 	],
// 	[{ id: 3, name: 'Charlie' }],
// ]

// const showConcat = arrays.reduce((acc, item) => acc.concat(item))
// console.log(showConcat)

// join
// const str = 'привет, я Нурик'

// const doArr = str.split('').join('')
// console.log(doArr)

// sort
// const arr = [67, 98, 33, 41, 5]
// const newArr = arr.sort((a, b) => {
// 	return a - b
// })

// console.log(newArr)

// isArray
// console.log(Array.isArray('asdasd'))

// splice
// arr.splice(index, deleteCount, ...)
// const arr = [67, 98, 33, 41, 5]

// const newArr = arr.splice(2, 1)
// console.log(arr)
// console.log(newArr)

// const arr = [67, 98, 33, 41, 5]

// // Удаляем элементы 67, 41 и 5, оставляя только 98 и 33
// arr
// 	.splice(0, 1) // Удаляем 67
// 	.splice(1, 2) // Удаляем 41 и 5

// console.log(arr) // Вывод: [98, 33]
// const removed = arr.splice(1, 1, 'asd')
// console.log(arr)
// console.log(removed)

// slice
// const newArr = arr.slice(2, -2)
// console.log(arr)
// console.log(newArr)

// indexOf
// const foundId = arr.indexOf(98)
// console.log(foundId)

// lastIndexOf
// const arr = [67, 98, 33, 41, 78, 98]
// const foundId = arr.lastIndexOf(98, 1)
// console.log(foundId)

// includes
const arr = [67, 98, 33, 41, 78, 98]
// const checkArr = arr.includes(3)
// console.log(arr)
// console.log(checkArr)

// const arr1 = ['a', 'b', 'c']

// console.log(arr1.includes('a', -1))

// reverse
arr.reverse()
console.log(arr)
