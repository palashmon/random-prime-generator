import { generateRandomPrime } from "../src/index";
import { isPrimeNumber } from "../src/utils";

test("generateRandomPrime returns a prime number within range", () => {
	const min = 10;
	const max = 20;
	const prime = generateRandomPrime(min, max);
	const isPrime = prime !== null && isPrimeNumber(prime);
	const inRange = prime !== null && prime >= min && prime <= max;
	expect(isPrime && inRange).toBe(true);
});

test("generateRandomPrime returns null if range is invalid", () => {
	const min = 10;
	const max = 5;
	const prime = generateRandomPrime(min, max);
	expect(prime).toBe(null);
});
