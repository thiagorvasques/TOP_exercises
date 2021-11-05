import reverse from "../code/reverse";

test("Reverserd word", () => {
  expect(reverse("today")).toBe("yadot");
});

test("Reverse and lower case word", () => {
  expect(reverse("JaVasCriPt")).toBe("tpircsavaj");
});

test("Not a string", () => {
  expect(reverse(["javascript"])).toBe("Not a string");
});

test("Empty string", () => {
  expect(reverse("")).toBe("");
});
