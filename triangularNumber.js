//triangle(1) ➞ 1

function triangle(n) {
	if(n < 2) return n
    let dotCount = 1
	for(let i = 2; i <= n; i++){
		dotCount += i //?
	}
	return dotCount
}

triangle(6)//?