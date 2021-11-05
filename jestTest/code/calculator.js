function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Not a number";
  }
}

function sub(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "Not a number";
  }
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return b === 0 || a === 0 ? "Not possible" : a / b;
}

export { add, sub, mult, div };
