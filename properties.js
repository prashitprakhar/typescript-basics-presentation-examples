var Employees = /** @class */ (function () {
    function Employees(fname, lname, level) {
        this.fname = fname;
        this.lname = lname;
        this.level = level;
    }
    Employees.prototype.employeeDetails = function () {
        console.log('First name : ', this.fname, ', Last name : ', this.lname, ' and level is : ', this.level);
    };
    Object.defineProperty(Employees.prototype, "Level", {
        get: function () {
            return this.level;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Level canot be less than 0');
            }
            this.level = value;
        },
        enumerable: true,
        configurable: true
    });
    return Employees;
}());
//Creating Object of the class and initializing it
var empObj = new Employees('Rahul', 'Roshan', 10); //Allocating memory to the Object
empObj.Level = 7;
empObj.employeeDetails();
