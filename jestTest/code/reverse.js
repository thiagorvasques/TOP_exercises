function reverse(str) {
  let reversed = "";
  if (typeof str === "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  } else if (str === "") {
    return "";
  } else {
    return "Not a string";
  }

  return reversed.toLowerCase();
}

export default reverse;
