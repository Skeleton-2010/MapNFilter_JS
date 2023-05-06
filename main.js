let array = [38, 17, 32, 45, 2, 50, 46, 19, 49, 7];

console.log(array);

let newArray = array.map(function (n) {
  return n * 100;
});

console.log(newArray);

let words = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
console.log(words);
let wordsLength = words.map(function (a) {
  return a.length;
});
console.log(wordsLength);

let nums = [191, 31, 52, 20, 188, 78, 68, 147, 145, 42];
console.log(nums);
let filtered = nums.filter(function (e) {
  if (e > 100) {
    return false;
  } else {
    return true;
  }
});
console.log(filtered);
