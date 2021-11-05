import { add, sub, mult, div } from "../code/calculator";

test("Sum a and b", () => {
  expect(add(5, 5)).toEqual(10);
});

test("Subtract a from b", () => {
  expect(sub(5, 2)).toEqual(3);
});

test("Multiplay a and b", () => {
  expect(mult(3, 3)).toEqual(9);
});

test("Divide a and b", () => {
  expect(div(10, 2)).toEqual(5);
});

test("Not a Number", () => {
  expect(add("3", "5")).toEqual("Not a number");
});

test("Not a Number", () => {
  expect(sub([3, 5])).toEqual("Not a number");
});

test("Division by 0", () => {
  expect(div(10, 0)).toEqual("Not possible");
});
