import caesar from "../code/caesar";

test("Cipher offset 1", () => {
  expect(caesar("abcdefg", 1)).toBe("bcdefgh");
});

test("Cipher offset 15", () => {
  expect(caesar("Another test", 15)).toBe("pcdiwtg ithi");
});

test("Ignore case sensitive and punctuation", () => {
  expect(caesar("(A SiMpLe TeSt) .!", 15)).toBe("(p hxbeat ithi) .!");
});

test("Ignore case sensitive and punctuation", () => {
  expect(caesar("{}zanabamvincamy", 15)).toBe("{}opcpqpbkxcrpbn");
});
