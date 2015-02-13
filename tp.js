function range(start, end, step) {
	if (step == null) step = 1;
		var array = [];

	if (step > 0) {
		for (var i = start; i <= end; i += step)
			array.push(i);
									} 
	else {
		for (var i = start; i >= end; i += step)
			array.push(i);
	}
	return array;
}
console.log(range(1, 10, 1));
console.log(range(1, 10, 2));
