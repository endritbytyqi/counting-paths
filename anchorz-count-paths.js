const X = process.argv[2];
const Y = process.argv[3];

function isPositiveInteger(value) {
  return /^\d+$/.test(value);
}

function countPathsWithCondition(X, Y, path = "") {
  if (!isPositiveInteger(X) || !isPositiveInteger(Y)) {
    console.log('Arguments should be valid integers.');
    process.exit(1);
  }

  X = parseInt(X);
  Y = parseInt(Y);

  if (X < 0 || X > 1000 || Y < 0 || Y > 1000) {
    console.log('Numbers should be between 0 and 1000.');
    process.exit(1);
  }

  if (X === 0 && Y === 0) {
    return [path];
  }

  let paths = [];

  // Recursive cases: move east and move north
  if (X > 0) {
    paths = paths.concat(countPathsWithCondition(X - 1, Y, path + "E"));
  }

  if (Y > 0) {
    paths = paths.concat(countPathsWithCondition(X, Y - 1, path + "N"));
  }

  return paths;
}

//use regex to validate if path contains 3 consecutive steps in a direction
// function isValidPath(path) {
//   return !/(EEE|NNN)/.test(path);
// }

const routesWithCondition = countPathsWithCondition(X, Y);
console.log(`Routes for each valid path (Optional): ${routesWithCondition.join(", ")}`);
console.log(`Total number of valid paths: ${routesWithCondition.length}`);
