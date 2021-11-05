function capitalize(str) {
  if (typeof str === "string") {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else if (str === "") {
    return "";
  } else {
    return "Not a string";
  }
}

export default capitalize;
