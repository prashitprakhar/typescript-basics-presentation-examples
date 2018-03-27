var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails() {
    }
    EmployeeDetails.prototype.employeeDetails = function () {
        console.log('First name : ', this.fname, ', Last name : ', this.lname, ' and level is : ', this.level);
    };
    return EmployeeDetails;
}());
//Creating Object of the class
var empDetailObj;
empDetailObj = new EmployeeDetails(); //Allocating memory to the Object
empDetailObj.fname = 'Rahul';
empDetailObj.lname = 'Roshan';
empDetailObj.level = 10;
empDetailObj.employeeDetails();
