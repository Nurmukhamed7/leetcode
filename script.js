// function curry(func) {
// 	return function curried(...args) {
// 		if (args.length >= func.length) {
// 			return func.apply(this, args)
// 		} else {
// 			// return curried.bind(this, ...args)
// 		}
// 	}
// }

// const join = (a, b, c) => {
// 	return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// console.log(curriedJoin(1, 2, 3))
// console.log(curriedJoin(1)(2, 3))
// console.log(curriedJoin(1, 2)(3))

// function calcDiscount(age) {
// 	if (age > 65) {
// 		console.log(this.price / 2)
// 	} else {
// 		console.log(this.price)
// 	}
// }

// const person = { title: 'iphone', price: 500 }

// const calcDiscountForElderly = calcDiscount.bind(person, 66)
// calcDiscountForElderly()

// const createItem = (title, price) => {
// 	this.title = title
// 	this.price = price
// 	// console.log(this)
// 	return this
// }
// const item1 = new createItem('phone', 1900)
// const item2 = new createItem('mouse', 12323)
// const item3 = new createItem('keyboard', 192300)
// const item4 = new createItem('macbook', 12)

// console.log(item1, item2, item3, item4)

// const obj = {
// 	getThis1: function () {
// 		console.log(this)
// 	},
// 	getThis2: () => {
// 		console.log(this)
// 	},
// }
// obj.getThis1()
// obj.getThis2()

// const myObj = {
// 	lastName: 'Ivanov',
// 	firstNames: ['Petr', 'Nurik'],
// 	logFullName1: function () {
// 		this.firstNames.forEach(function (name) {
// 			console.log(`${this.lastName} ${name}`)
// 		}, this)
// 	},
// 	logFullName2: function () {
// 		this.firstNames.forEach(name => {
// 			console.log(`${this.lastName} ${name}`)
// 		})
// 	},
// }
// myObj.logFullName1()
// myObj.logFullName2()

// const item = {
// 	title: 'phone',
// 	logTitle: function () {
// 		setTimeout(() => {
// 			console.log(this)
// 		})
// 	},
// 	logTitle2: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this)
// 			}.bind(this)
// 		)
// 	},
// }
// item.logTitle()
// item.logTitle2()

// const addCustomer =
// 	fn =>
// 	(...args) => {
// 		console.log('save')
// 		return fn(...args)
// 	}

// const addCustomer2 =
// 	fn =>
// 	(...args) => {
// 		console.log('save 2')
// 		return fn(...args)
// 	}

// // addCustomer(addCustomer2)

// console.log(addCustomer)

// function sum(a, b, c) {
// 	return a + b + c
// }

// function curry(fn) {
// 	return function curried(...args) {
// 		console.log(args.length, fn.length)
// 		if (args.length >= fn.length) {
// 			console.log('прошел if')
// 			return fn.apply(this, args)
// 		}
// 		console.log('не прошел if')
// 		return curried.bind(this, ...args)
// 	}
// }

// const curriedSum = curry(sum)

// console.log(curriedSum(2, 3, 4))
// console.log(curriedSum(2, 3)(5))
//
//
//
//
//

// function sum(a, b, c) {
// 	return a + b + c
// }

// const contextObject = { value: 10, title: 'asdasd' }

// const result = sum.apply(contextObject, [2, 3, 5])
// console.log(result)
//
//
//
//
//
//
//
// const car = {
// 	model: 'Toyota',
// 	year: 2007,
// 	showModel: function (color = 'yellow', engine = 'fuel') {
// 		console.log(this.model, color, engine)
// 	},
// }

// const anotherCar = {
// 	model: 'BMW',
// 	year: 2015,
// }

// car.showModel()
// car.showModel.call(anotherCar, 'orange', 'electro')
// car.showModel.apply(anotherCar, ['red', 'diesel'])
// const modelShower = car.showModel.bind(anotherCar)
// // console.log(modelShower('green', 'gas'))
// modelShower()
///
///
//
//
//
//
// const person = {
// 	name: 'Nurik',
// 	age: 25,
// 	job: 'frontend',
// 	showJob: function (job, isMarried) {
// 		console.log(this.name, job, isMarried)
// 	},
// }

// const myFriend = {
// 	name: 'Bob',
// 	age: 18,
// }

// person.showJob('Analyst', true)
// person.showJob.apply(myFriend, ['backend', true])
// const showUpadatedFriendInfo = person.showJob.bind(myFriend)
// showUpadatedFriendInfo('SWE', false)
// console.log(typeof myFriend)

// function curry(fn) {
// 	return function curried(...args) {
// 		console.log(args.length, fn.length)
// 		if (args.length >= fn.length) {
// 			console.log('зашел в if')
// 			return fn.apply(this, args)
// 		}
// 		return curried.bind(this, ...args)
// 	}
// }

// const join = (a, b, c) => {
// 	return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// // console.log(curriedJoin(1, 2, 3))
// // console.log(curriedJoin(1)(2, 3))
// // console.log(curriedJoin(1, 2)(3))
// console.log(curriedJoin(1)(2)(3))

// // console.log(join.apply(this, args))
// //
// //
// //
// //
// const obj = { num: 2 }

// function add(a) {
// 	return this + a + 'qwe'
// }

// console.log(add.call(this))

//
//
//
// var arr1 = [1, [2, [3, [4, [5, [6, [7, [8, [9, 10]]]]]]]]]
// console.log(arr1.flat(5))

// function flat(arr, depth = 1) {
// 	const result = []

// 	for (let item of arr) {
// 		console.log(depth)
// 		if (Array.isArray(item) && depth > 0) {
// 			result.push(...flat(item, depth - 1))
// 		} else {
// 			result.push(item)
// 		}
// 	}

// 	return result
// }

// function flat(arr, depth = 1) {
// 	return arr.reduce((result, item) => {
// 		if (Array.isArray(item) && depth > 0) {
// 			result.push(...flat(item, depth - 1))
// 		} else {
// 			result.push(item)
// 		}
// 		return result
// 	}, [])
// }

// const arr = [1, [2], [3, [4]]]

// console.log(flat(arr)) // [1, 2, 3, [4]]
// console.log(flat(arr, 1)) // [1, 2, 3, [4]]
// console.log(flat(arr, 2)) // [1, 2, 3, 4]

// function curry(fn) {
// 	return function curried(...args) {
// 		if (args.length >= fn.length) {
// 			return fn.apply(this, args)
// 		} else {
// 			return curried.bind(this, ...args)
// 		}
// 	}
// }

// const join = (a, b, c) => {
// 	return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)

// console.log(curriedJoin(1, 2, 3)) // '1_2_3'
// console.log(curriedJoin(1)(2, 3)) // '1_2_3'
// console.log(curriedJoin(1, 2)(3)) // '1_2_3'
// console.log(curriedJoin(1)(2)(3)) // '1_2_3'
