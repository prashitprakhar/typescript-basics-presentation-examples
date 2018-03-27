class Employees { 

    constructor(private _fname?: string, private _lname?: string, private _level?: number){
    }

    employeeDetails(){
        console.log('First name : ',this._fname,', Last name : ',this._lname,' and level is : ',this._level);
    }

    get level(){
        return this._level;
    }

    set level(value){
        if(value<0){
            throw new Error('Level canot be less than 0');
        }

        this._level = value;
    }

}

//Creating Object of the class and initializing it
let empObj = new Employees('Rahul', 'Roshan', 10); //Allocating memory to the Object

empObj.level = 7;

empObj.employeeDetails();
