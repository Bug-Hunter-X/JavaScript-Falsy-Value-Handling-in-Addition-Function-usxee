function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle only null values explicitly
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0,5)); //Output: 5
console.log(foo('',5)); //Output: 5
console.log(foo(false,5)); //Output: 5