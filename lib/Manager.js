const Employee = require('./Employee');
// create a new class from another class that is already called
class Manager extends Employee {
    // constructor (length) {
    // super(length, length)
    // this.name = ''
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };
    acquireOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;