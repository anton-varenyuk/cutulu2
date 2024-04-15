export function hash(input: string, length = 16): string {
	let hashed = 5381;
	for (let i = 0; i < input.length; i++) {
		hashed = (hashed << 5) + hashed + input.charCodeAt(i);
	}

	let hashedString = hashed.toString(16); // Convert to hexadecimal
	// Pad with leading zeros if necessary
	while (hashedString.length < length) {
		hashedString = '0' + hashedString;
	}
	// Truncate if longer than specified length
	hashedString = hashedString.slice(0, length);

	return hashedString;
}
