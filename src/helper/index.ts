export type IsValidWalkDataType = "n" | "s" | "e" | "w";

export const isValidWalk = (walk: IsValidWalkDataType[]) => {
  // Check if the walk length is exactly 10 minutes
  if (walk.length !== 10) {
    return false;
  }

  // Initialize coordinates for the starting point
  let x = 0;
  let y = 0;

  // Iterate through the walk array and update coordinatesx
  for (let direction of walk) {
    switch (direction) {
      case "n":
        y += 1;
        break;
      case "s":
        y -= 1;
        break;
      case "e":
        x += 1;
        break;
      case "w":
        x -= 1;
        break;
    }
  }

  // Check if the final coordinates are the starting point
  return x === 0 && y === 0;
};

export const getRemainder = (n: number, m: number) => {
  if (n === 0 && m === 0) {
    return "NaN";
  }

  if (n === 0) {
    return 0;
  }

  if (m === 0) {
    return "NaN";
  }

  const larger = Math.max(n, m);
  const smaller = Math.min(n, m);

  return larger % smaller;
};

export const combineLetters = (
  inputOne: string,
  inputTwo: string,
  inputThree: string
) => {
  let combined = "";

  for (let i = 0; i < inputOne.length; i++) {
    combined += inputOne[i] + inputTwo[i] + inputThree[i];
  }

  return combined;
};

export const generateAcronym = (fullName: string) => {
  const nameParts = fullName.split(" ");
  let acronym = "";

  // Handle first name part(s)
  if (nameParts[0].includes("-")) {
    // If the first name contains a dash, take the first letter of each part
    const firstNames = nameParts[0].split("-");
    firstNames.forEach((name) => (acronym += name[0].toUpperCase()));
  } else {
    // If the first name does not contain a dash, take the first letter
    acronym += nameParts[0][0].toUpperCase();
  }

  // Handle last name part(s)
  const lastName = nameParts.slice(1).join(" ");
  if (lastName.includes("von ")) {
    // If the last name contains "von", handle it specially
    const [von, ...rest] = lastName.split("von ");
    const lastNames = rest.join(" ").split(/[- ]/);
    acronym += "v" + lastNames.map((name) => name[0].toUpperCase()).join("");
  } else if (lastName.includes("-")) {
    // If the last name contains a dash, take the first letter of each part
    const lastNames = lastName.split("-");
    lastNames.forEach((name) => (acronym += name[0].toUpperCase()));
  } else {
    // If the last name does not contain a dash or "von", take the first letter
    acronym += lastName[0].toUpperCase();
  }

  return acronym;
};
