// Using recursive function to work out factorial

function factorial(x) {
  if (x === 0) {
    return 1;
    // eslint-disable-next-line no-else-return
  } else {
    return x * factorial(x - 1);
  }
}

// console.log(factorial(7));

module.exports = factorial;
