import captalize from "../code/capitalize";

test("First letter of a word capitalized", () => {
  expect(captalize("javascript")).toBe("Javascript");
});

test("First letter of a sentence capitalized", () => {
  expect(captalize("testing a sentece")).toBe("Testing a sentece");
});

test("Remaining letter to lowercase", () => {
  expect(captalize("jAvAscRipT")).toBe("Javascript");
});

test("Not a string", () => {
  expect(captalize(["javascript"])).toBe("Not a string");
});

test("Empty string", () => {
  expect(captalize("")).toBe("");
});
