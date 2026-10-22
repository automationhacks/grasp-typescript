function greetAgain() {
  // string
  let name: string = "Bob";
  // number (in JS, int, float are not different types but simply a number)
  let age: number = 42;
  // boolean
  let isAdult: boolean = true;
  // We can specify arrays by following syntax type[] here type could be 
  // number, string, boolean
  let numbers: number[] = [1, 2, 3, 4]
  // Another way is also to use Array<type> syntax as well
  let randomNumbers: Array<number> = [5, 6, 13, 4]

  console.log(
    `Well, nice to meet you ${name}. I see you are ${age} years old and are an adult? ${isAdult}`,
  );
  console.log(`What are different options you have? ${numbers}`)
  console.log(`And here are random numbers: ${randomNumbers}`)
}

greetAgain();
