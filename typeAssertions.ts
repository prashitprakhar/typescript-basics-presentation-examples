
// let role = 'Developer';
// let endsWithR = role.endsWith('r');

let role;
role = 'Developer';
let endsWithR = (<string>role).endsWith('r');
let secondWay = (role as string).endsWith('r');

console.log(endsWithR);
console.log(secondWay);