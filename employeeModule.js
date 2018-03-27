"use strict";
exports.__esModule = true;
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule(_empName, _empLevel) {
        this._empName = _empName;
        this._empLevel = _empLevel;
    }
    EmployeeModule.prototype.logEmployeeDetails = function () {
        console.log('Employee Name : ', this._empName, ' and Employee Level : ', this._empLevel);
    };
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
