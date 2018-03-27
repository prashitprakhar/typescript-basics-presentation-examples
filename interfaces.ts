interface EmpDetails {
    fname: string,
    lname: string,
    level: number
}

let empDetails = (details: EmpDetails) => {
    //...
}

// //Inline Annotation
// let empDetails = (details : { fname: string, lname: string, level: number}) => {
//     //...
// }

empDetails({
    fname: 'Rahul',
    lname: 'ROshan',
    level: 10
});