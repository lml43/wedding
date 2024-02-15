let guess = 'Bờm';
// Encode the String
var encodedString = Base64.encode(guess);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
var decodedString = Base64.decode(encodedString);
console.log(decodedString); // Outputs: "Hello World!"