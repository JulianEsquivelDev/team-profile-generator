const Employee = require('./Employee');
// create a new class from another class that is already called
class Intern extends Employee {
    // constructor (length) {
    // super(length, length)
    // this.name = ''
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    };

    acquireSchool(){
        return this.school;
    }
};

module.exports = Intern;