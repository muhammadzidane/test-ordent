import {
  isValidWalk,
  IsValidWalkDataType,
  getRemainder,
  combineLetters,
  generateAcronym,
} from "./helper";

const walk1: IsValidWalkDataType[] = [
  "n",
  "s",
  "n",
  "s",
  "n",
  "s",
  "n",
  "s",
  "n",
  "s",
]; // True
const walk2: IsValidWalkDataType[] = [
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
  "w",
  "e",
]; // True
const walk3: IsValidWalkDataType[] = [
  "n",
  "e",
  "w",
  "s",
  "n",
  "e",
  "w",
  "s",
  "n",
  "e",
]; // False

// TEST 1
console.log("TEST 1 =", isValidWalk(walk1)); // true
console.log("TEST 1 =", isValidWalk(walk2)); // true
console.log("TEST 1 =", isValidWalk(walk3)); // false

// TEST 2
console.log("TEST 2 =", getRemainder(17, 5)); // Output: 2
console.log("TEST 2 =", getRemainder(13, 72)); // Output: 7
console.log("TEST 2 =", getRemainder(0, -1)); // Output: 0
console.log("TEST 2 =", getRemainder(0, 1)); // Output: 0
console.log("TEST 2 =", getRemainder(1, 0)); // Output: "NaN"
console.log("TEST 2 =", getRemainder(0, 0)); // Output: "NaN"

// TEST 3
console.log("TEST 2 =", combineLetters("aa", "bb", "cc")); // Output: "abcabc"
console.log("TEST 2 =", combineLetters("xyz", "123", "abc")); // Output: "x1ay2b3zc"

// TEST 4
console.log("TEST 4 =", generateAcronym("Thomas Meyer")); // Output: TM
console.log("TEST 4 =", generateAcronym("martin schmidt")); // Output: MS
console.log("TEST 4 =", generateAcronym("Jan-Erich Schmidt")); // Output: JES
console.log("TEST 4 =", generateAcronym("Jan Erich Mueller")); // Output: JEM
console.log("TEST 4 =", generateAcronym("Paul Meyer-Schmidt")); // Output: PMS
console.log("TEST 4 =", generateAcronym("Paul von Lahnstein")); // Output: PvL
console.log("TEST 4 =", generateAcronym("Martin von Lahnstein-Meyer")); // Output: MvLM
