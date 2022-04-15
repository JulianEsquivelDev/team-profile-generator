const Intern = require("../lib/Intern");

test("generate school", () => {
    const testValue = "UM";
    const employee = new Intern("Foo", 1, "test@test.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("acquireRole() return \"Intern\"", () => {
    const testValue = "Intern";
    const employee = new Intern("Foo", 1, "test@test.com", "UM");
    expect(employee.acquireRole()).toBe(testValue);
});

test("obtain school through acquireSchool()", () => {
    const testValue = "UM";
    const employee = new Intern("Foo", 1, "test@test.com", testValue);
    expect(employee.acquireSchool()).toBe(testValue);
});