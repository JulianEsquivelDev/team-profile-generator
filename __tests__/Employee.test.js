// require Employee so we can obtain the constructor data
const Employee = require("../lib/Employee");

// create tests for Employee
test('create new employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('set the name for the employee', () => {
    const name = 'Julian';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('set the id for the employee', () => {
    const testValue = 100;
    const employee = new Employee('Foo', testValue);
    expect(employee.id).toBe(testValue);
});

test('set the email for the employee', () => {
    const testValue = 'test@test.com';
    const employee = new Employee('Foo', 1, testValue);
    expect(employee.email).toBe(testValue);
});
// create test to obtain "acquireName()" from Employee.js
test("obtain the name through acquireName()", () => {
    const testValue = 'Julian';
    const employee = new Employee(testValue);
    expect(employee.acquireName()).toBe(testValue);
});
// create test to obtain "acquireId()" from Employee.js
test('obtain the id through acquireId()', () => {
    const testValue = 100;
    const employee = new Employee('Foo', testValue);
    expect(employee.acquireId()).toBe(testValue);
});
// create test to obtain "acquireEmail()" from Employee.js
test('obtain the id through acquireEmail()', () => {
    const testValue = 'test@test.com';
    const employee = new Employee('Foo', 1, testValue);
    expect(employee.acquireEmail()).toBe(testValue);
});

test('acquireRole() should return \'Employee\'', () => {
    const testValue = "Employee";
    const employee = new Employee('Julian', 1, "test@test.com");
    expect(employee.acquireRole()).toBe(testValue);
});

