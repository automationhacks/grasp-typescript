let obj: any = {x: 10};

// If we use any, it indicates to TS compiler (tsc) that we know the type best and
// don't want any further typechecking to happen on this object.
// anything that is syntactically legal would work like below:
// If you try to run this, then of-course you may get an error like:

/** if we run via node, we get this error since obj does not have any function like foo()
 * ts-handbook-tuts git:(main) ✗ node 05-any.ts 
/Users/gaurav_singh/self/grasp-typescript/src/ts-handbook-tuts/05-any.ts:6
obj.foo();
    ^

TypeError: obj.foo is not a function
    at Object.<anonymous> (/Users/gaurav_singh/self/grasp-typescript/src/ts-handbook-tuts/05-any.ts:6:5)
 */
obj.foo();
obj();
obj.bar = 100;
obj = "Hello";
const n: number = obj;
console.log("What is obj? ${obj}");