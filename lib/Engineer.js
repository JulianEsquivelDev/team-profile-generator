const Employee = require('./Employee');
// create a new class from another class that is already called
class Engineer extends Employee {
    // constructor (length) {
    // super(length, length)
    // this.name = ''
    constructor (name, id,email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    };

    acquireGithub() {
        return this.gitHub;
    }
}

module.exports = Engineer;