function greet(name: string) {
    console.log(`Hello! ${name.toUpperCase()}, I see your favourite number is ${getFavouriteNumber()}`)
}

// Return values from a function can also have type
function getFavouriteNumber(): number {
    return 42;
}

// Below code will show this error
// Argument of type 'number' is not assignable to parameter of type 'string'.
// greet(42);
greet("Anderson");