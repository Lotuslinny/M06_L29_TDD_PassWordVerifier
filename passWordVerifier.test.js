const { hasRightLength, isNotNull, hasUpperCaseCharacter, hasLowerCaseCharacter, hasDigit, verifyPassword } = require("./passWordVerifier");

test("set password shorter than 9 characters", () => {
  const password = hasRightLength("HENK")
  expect(password).toBe(true);
});


test("password must NOT be Null", () => {
  const password = isNotNull("Henkie")
  expect(password).not.toBeNull();
});

test('password has one or more Uppercase Characters', () => {
  const password = hasUpperCaseCharacter("HEnk")
  expect(password).toBe(true);
});


test("password has one or more Lowercase Characters", () => {
  const password = hasLowerCaseCharacter("KIek")
  expect(password).toBe(true);
});


test("password has one or more Numbers", () => {
  const password = hasDigit("1iek")
  expect(password).toBe(true);
});

test("password is verified", () => {
  const password = verifyPassword("hp1")
  expect(password).toBe(true);
});
