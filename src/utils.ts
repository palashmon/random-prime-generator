/**
 * The function generates a random number within a given range.
 * @param {number} min - The minimum value of the range
 * @param {number} max - The maximum value of the range
 * @returns a random integer between the minimum and maximum values (inclusive) specified as arguments.
 */
export function getRandomNumberInRange(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * This function returns a random odd number within a given range.
 * @param {number} min - The minimum value of the range
 * @param {number} max - The maximum value of the range
 * @returns A random odd number within the given range (between `min` and `max`) is being returned.
 */
export function getRandomOddNumberInRange(min: number, max: number): number {
	let num = getRandomNumberInRange(min, max);
	while (num % 2 === 0) {
		num = getRandomNumberInRange(min, max);
	}
	return num;
}

/**
 * The function checks if a given number is a prime number or not.
 * @param {number} num - number - the number to be checked if it is a prime number or not.
 * @returns a boolean value, which is either true or false.
 */
export function isPrimeNumber(num: number): boolean {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
