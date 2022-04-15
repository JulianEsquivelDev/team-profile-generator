
const Engineer = require('../lib/Engineer');

test('generate GitHub account', () => {
    const testValue = 'GitHubUser';
    const employee = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(employee.gitHub).toBe(testValue);
});

test('acquireRole() should return \'Engineer\'', () => {
    const testValue = "Engineer";
    const employee = new Engineer('Foo', 1, 'test@test.com', "GitHubUser");
    expect(employee.acquireRole()).toBe(testValue);
});

test("obtain GitHub through acquireGitHub()", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(employee.acquireGithub()).toBe(testValue);
});
