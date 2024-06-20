const checkFive = require("../checkFive.js");

describe("checkFive", function () {
  test("return ''num' is less than 5.' if number is less than 5", function () {
    let output = checkFive(2);
    expect(output).toEqual("2 is less than 5.");
  });
  test("return ''num' is equal to 5.' if number is equal to 5", function () {
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.");
  });
  test("return ''num' is greater than 5.' if number is greater than 5", function () {
    let output = checkFive(8);
    expect(output).toEqual("8 is greater than 5.");
  });
});
