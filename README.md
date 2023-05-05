# Random Prime Number Generator

A TypeScript package that generates a random prime number within a certain range.

## Installation

```bash
npm install random-prime-generator
```

## Usage

To generate a random prime number, import the `generateRandomPrime` function from the `random-prime-generator` package and pass in the range in which you want the prime number to be generated.

```typescript
import { generateRandomPrime } from "random-prime-generator";

const randomPrime = generateRandomPrime(1, 100);

console.log(randomPrime); // Logs a random prime number between 1 and 100 (inclusive)
```

## API

### `generateRandomPrime(min: number, max: number): number`

Generates a random prime number between `min` and `max`.

#### input

- `min` - The minimum value of the range (inclusive). Must be a number.
- `max` - The maximum value of the range (inclusive). Must be a number.

#### return value

- Returns a random prime number between the `min` and `max` values (inclusive) if one is found.
- or `null` if no prime number is found within the range or if the input values are invalid.

## License

MIT © [Palash Mondal](https://github.com/palashmon)
