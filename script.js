// Functions
// Function Declaration
function calcAge(birthyear) {
  return 2024 - birthyear;
}

const age = calcAge(2002);
console.log(age);

// Function Expression
const age2 = function (birthyear) {
  return 2023 - birthyear;
};

console.log(age2);
