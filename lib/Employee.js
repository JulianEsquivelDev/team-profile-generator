class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    // acquire everything from the constructor 
    acquireName(){
        return this.name
    }
    acquireId(){
        return this.id
    }
    acquireEmail(){
        return this.email
    }
    acquireRole(){
        return this.role
    }
}

module.exports = Employee;