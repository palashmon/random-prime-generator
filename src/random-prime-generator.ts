import { getRandomOddNumberInRange, isPrimeNumber } from "./utils";

/**
 * This TypeScript function generates a random prime number within a given range.
 * @param {number} min - The minimum value of the range within which a random prime number is to be
 * generated.
 * @param {number} max - The maximum value of the range within which a random prime number needs to be
 * generated.
 * @returns The function `generateRandomPrime` returns a random prime number between the `min` and
 * `max` values (inclusive) if one is found, or `null` if no prime number is found within the range or
 * if the input values are invalid.
 */
export function generateRandomPrime(min: number, max: number): number | null {
	if (min < 2 || max < 2 || min > max) {
		return null;
	}

	for (let num = getRandomOddNumberInRange(min, max); num <= max; num += 2) {
		if (isPrimeNumber(num)) {
			return num;
		}
	}

	return null;
}
