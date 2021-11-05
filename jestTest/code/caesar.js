function caesar(str, offset) {
  //console.log(str, offset);
  let cypher = "";
  let lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    let char = lower.charCodeAt(i) + offset;
    if (
      lower[i] === "{" ||
      lower[i] === "}" ||
      lower[i] === "|" ||
      lower[i] === "~"
    ) {
      cypher += lower[i];
    } else {
      if (char >= 122) {
        let remain = char - 123;
        cypher += String.fromCharCode(remain + 97);
      } else if (char >= 97 && char < 122) {
        cypher += String.fromCharCode(char);
      } else {
        char = char - offset;
        cypher += String.fromCharCode(char);
      }
    }
  }
  return cypher;
}

export default caesar;
