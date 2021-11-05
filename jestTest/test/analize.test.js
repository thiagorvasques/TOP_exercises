import arrayAnalysis from "../code/analize";

test("Array test 1", () => {
  expect(arrayAnalysis([2, 4, 6, 8, 10, 12])).toEqual({
    average: 7,
    min: 2,
    max: 12,
    length: 6,
  });
});

test("Array test 2", () => {
  expect(arrayAnalysis([3, 21, 45, 4, 1])).toEqual({
    average: 14.8,
    min: 1,
    max: 45,
    length: 5,
  });
});

test("Array test 2", () => {
  expect(arrayAnalysis([10, 21, 32, 43, 54])).toEqual({
    average: 32,
    min: 10,
    max: 54,
    length: 5,
  });
});
