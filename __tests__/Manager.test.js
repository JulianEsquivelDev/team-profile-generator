const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("set the office number", () => {
    const testValue = 100;
    const employee = new Manager("Foo", 1, "test@tes,com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test('acquireRole() returns \'Manager\'', () => {
    const testValue = "Manager";
    const employee = new Manager("Foo", 1, 'test@test.com', 100);
    expect(employee.acquireRole()).toBe(testValue);
});

test("obtain office number through acquireOffice", () => {
    const testValue = 100;
    const employee = new Manager('Foo', 1, "test@test.com", testValue);
    expect(employee.acquireOfficeNumber()).toBe(testValue);
});