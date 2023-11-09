const X = process.argv[2];
const Y = process.argv[3];


//Check if the args are valid positive integers
function isPositiveInteger(value) {
  return /^\d+$/.test(value);
}

function countPathsWithCondition(X, Y, path = "", consecutiveSteps = { E: 0, N: 0 }) {
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
    return [path]
  }

  let paths = [];

  // Move east and north and count consecutive steps
  if (X > 0 && consecutiveSteps.E < 2) {
    const eastConsecutiveSteps = { E: consecutiveSteps.E + 1, N: 0 };
    paths = paths.concat(countPathsWithCondition(X - 1, Y, path + "E", eastConsecutiveSteps));
  }

  if (Y > 0 && consecutiveSteps.N < 2) {
    const northConsecutiveSteps = { E: 0, N: consecutiveSteps.N + 1 };
    paths = paths.concat(countPathsWithCondition(X, Y - 1, path + "N", northConsecutiveSteps));
  }

  return paths;
}

const routesWithCondition = countPathsWithCondition(X, Y);
console.log(`Routes for each valid path (Optional): ${routesWithCondition.join(", ")}`);
console.log(`Total number of valid paths: ${routesWithCondition.length}`);
