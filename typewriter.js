// // const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   setTimeout(() => {
//     // print the char here
//   }, 1000) //
//   process.stdout.write(char);
// }
function typeWriter(sentence, index) {
  if (index < sentence.length) {
    setTimeout(() => {
      process.stdout.write(sentence[index]);
      typeWriter(sentence, index + 1);
    }, 50); // Adjust the delay here (approximately 50ms)
  } else {
    // Add a newline character after all characters have been written
    process.stdout.write("\n");
  }
}


// Tsentence to display
const sentence = "4311o th3r3 w0r1d";

// Start the typing effect
typeWriter(sentence, 0);