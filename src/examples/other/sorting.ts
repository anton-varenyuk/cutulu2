// Bubble sorting
export function bubbleSort(arr: number[]) {
	const a = [...arr];

	for (let i = 0; i < a.length - 1; i++) {
		for (let j = 0; j < a.length - 1 - i; j++) {
			if (a[j] > a[j + 1]) {
				// Swap elements
				const temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
			}
		}
	}
	const end = performance.now();

	return a;
}

// Insertion sorting
export function insertionSort(arr: number[]) {
	const a = [...arr];

	for (let i = 1; i < a.length; i++) {
		const current = a[i];
		let j = i - 1;
		while (j >= 0 && a[j] > current) {
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = current;
	}

	return a;
}

// Bucket sorting
export function bucketSort(arr: number[], bucketSize = 5) {
	if (!arr.length) {
		return arr;
	}

	// Determine minimum and maximum values in the array
	const minValue = Math.min(...arr);
	const maxValue = Math.max(...arr);

	// Create buckets
	const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
	const buckets = new Array(bucketCount);
	for (let i = 0; i < buckets.length; i++) {
		buckets[i] = [];
	}

	// Assign elements to buckets
	for (let i = 0; i < arr.length; i++) {
		const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
		buckets[bucketIndex].push(arr[i]);
	}

	// Sort each bucket and concatenate the result
	const sortedArray = [];
	for (let i = 0; i < buckets.length; i++) {
		if (buckets[i].length > 0) {
			const sortedBucket = insertionSort(buckets[i]);
			sortedArray.push(...sortedBucket);
		}
	}

	return sortedArray;
}
