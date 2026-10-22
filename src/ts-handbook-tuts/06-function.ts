function greet(name: string) {
    console.log(`Hello! ${name.toUpperCase()}, I see your favourite number is ${getFavouriteNumber()}`)
}

// Return values from a function can also have type
function getFavouriteNumber(): number {
    return 42;
}

// We can annotate a function that returns a Promise like so.
async function addTo(first: number, delta: number): Promise<number> {
    return first + delta;
}

// Below code will show this error
// Argument of type 'number' is not assignable to parameter of type 'string'.
// greet(42);
greet("Anderson");
// Can I add two nos?, Yes, I can: [object Promise]
// Here, 
console.log(`Can I add two nos?, Yes, I can: ${addTo(10, 5)}`);
export {}