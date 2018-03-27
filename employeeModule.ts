export class EmployeeModule {
    constructor(private _empName?: string, private _empLevel?: number){}

    logEmployeeDetails(){
        console.log('Employee Name : ',this._empName,' and Employee Level : ',this._empLevel);
    }

}