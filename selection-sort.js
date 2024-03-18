function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	
	 for (let i = 0; i < arr.length; i++) {
		let min = i;
		for(let j = i+1; j < arr.length; j++){
			if(arr[j]<arr[min]){
				min = j;
			}
		}
		if(min != 1){
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	 }
	return array;
	}

	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (1,2){
	return true;
}else{
	return false;
}

module.exports = selectionSort;

