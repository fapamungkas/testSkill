var output = [];
y = 7;

for (i = 1; i <= y; i++) {
  if (i == 2 || i == 6) {
    output.push("x");
  } else {
    output.push("y");
  }
}
console.log(output);
