const fibonacci = n => {
	if (n === 1 || n === 2) return 1
	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(-1)) // 1 1 2 3 5 8 13 21
// 4+3=3+2+2+1=2+1+1+1+1+1+1=8
