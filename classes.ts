class EmployeeDetails { 
    fname: string;
    lname: string;
    level: number;

    // constructor(fname: string, lname: string, level: number){
    //     this.fname = fname;
    //     this.lname = lname;
    //     this.level = level;
    // }

    employeeDetails(){
        console.log('First name : ',this.fname,', Last name : ',this.lname,' and level is : ',this.level);
    }

}

//Creating Object of the class
let empDetailObj: EmployeeDetails;

empDetailObj = new EmployeeDetails(); //Allocating memory to the Object

empDetailObj.fname = 'Rahul';
empDetailObj.lname = 'Roshan';
empDetailObj.level = 10;


//empDetailObj = new EmployeeDetails('Rahul', 'Roshan', 10);
empDetailObj.employeeDetails();