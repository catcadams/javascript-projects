// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  test("Checks that organization = nonprofit", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("Check that executiveDirector = Jeff", function () {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("Check percentageCoolEmployees = 100", function () {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("Check that programsOffered contains web development, data analysis, and liftoff, and length = 3", function () {
    expect(launchcode.programsOffered).toContain("Web Development"),
      expect(launchcode.programsOffered).toContain("Data Analysis"),
      expect(launchcode.programsOffered).toContain("Liftoff"),
      expect(launchcode.programsOffered.length).toBe(3);
  });
  test("When passed a number that is only divisible by 2 launch output returns Launch!", function () {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  });
  test("When passed a number that is only divisible by 3 launch output returns Code!", function () {
    expect(launchcode.launchOutput(9)).toBe("Code!");
  });
  test("When passed a number that is only divisible by 5 launch output returns Rocks!", function () {
    expect(launchcode.launchOutput(25)).toBe("Rocks!");
  });
  test("When passed a number that is divisible by 2 and 3 launch output returns LaunchCode!", function () {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  test("When passed a number that is divisible by 3 and 5 launch output returns Code Rocks!", function () {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });
  test("When passed a number that is divisible by 2 and 5 launch output returns Launch Rocks! (CRASH!!!!)", function () {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });
  test("When passed a number that is divisible by 2,3, and 5 launch output returns LaunchCode Rocks!", function () {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });
  test("Returns 'Rutabagas! That doesn't work.' if passed a number NOT divisible by 2, 3, or 5", function () {
    expect(launchcode.launchOutput(11)).toBe("Rutabagas! That doesn't work.");
  });
});
